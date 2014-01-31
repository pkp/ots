<?php
namespace CitationstyleConversionTest\Model;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;

class CitationstylesTest extends ModelTest
{
    protected $citationStyles;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->citationStyles = $this->sm->get('CitationstyleConversion\Model\Citationstyles');
    }

    /**
     * Tests if getStyleMap returns data in the correct format
     *
     * @return void
     */
    public function testStyleMap()
    {
        $styleMap = $this->citationStyles->getStyleMap();
        $this->assertTrue(is_array($styleMap));
        $this->assertGreaterThan(0, count($styleMap));
        $this->assertGreaterThan(0, count($styleMap));
        $keys = array_keys($styleMap);
        $this->assertTrue(isset($styleMap[$keys[0]]['file']));
        $this->assertTrue(isset($styleMap[$keys[0]]['title']));
    }

    /**
     * Tests if getTitleList returns data for valid fragments
     *
     * @return void
     */
    public function testTitleList()
    {
        $fragment = 'ha'; // i.e. Harvard
        $titleList = $this->citationStyles->getTitleList($fragment);
        $this->assertGreaterThan(0, count($titleList));
        $this->assertTrue((strpos(strtolower($titleList[0]), $fragment) !== false));
    }

    /**
     * Tests if getTitleList returns no data for invalid fragments
     *
     * @return void
     */
    public function testTitleListEmpty()
    {
        $fragment = 'something that doesnt exist';
        $titleList = $this->citationStyles->getTitleList($fragment);
        $this->assertEquals(0, count($titleList));
    }

    /**
     * Tests if getCitationStyleFileByHash returns a valid file for valid hashes
     *
     * @return void
     */
    public function testCitationStyleFileByHash()
    {
        $styleMap = $this->citationStyles->getStyleMap();
        $keys = array_keys($styleMap);

        $file = $this->citationStyles->getCitationStyleFileByHash($keys[0]);

        $this->assertFileExists($file);
    }

    /**
     * Tests if getCitationStyleFileByHash returns no file for invalid hashes
     *
     * @return void
     */
    public function testCitationStyleFileByHashInvalid()
    {
        $file = $this->citationStyles->getCitationStyleFileByHash(md5('Invalid Hash'));

        $this->assertFalse($file);
    }

    /**
     * Tests if getCitationStyleFileByTitle returns a valid file for valid titles
     *
     * @return void
     */
    public function testCitationStyleFileByTitle()
    {
        $styleMap = $this->citationStyles->getStyleMap();
        $first = array_pop($styleMap);
        $title = $first['title'];

        $file = $this->citationStyles->getCitationStyleFileByTitle($title);

        $this->assertFileExists($file);
    }

    /**
     * Tests if getCitationStyleFileByTitke returns no file for invalid titles
     *
     * @return void
     */
    public function testCitationStyleFileByTitleInvalid()
    {
        $file = $this->citationStyles->getCitationStyleFileByTitle('Invalid Title');

        $this->assertFalse($file);
    }

    /**
     * Test if validTitle returns true for valid titles
     *
     * @return void
     */
    public function testValidTitleWithValidTitle()
    {
        $styleMap = $this->citationStyles->getStyleMap();
        $first = array_pop($styleMap);
        $title = $first['title'];

        $result = $this->citationStyles->validTitle($title);

        $this->assertTrue($result);
    }

    /**
     * Test if validTitle returns false for invalid titles
     *
     * @return void
     */
    public function testValidTitleWithInvalidTitle()
    {
        $result = $this->citationStyles->validTitle('Invalid Title');
        $this->assertFalse($result);
    }
}
