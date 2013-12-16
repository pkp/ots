<?php

namespace ManagerTest\Entity;

use PHPUnit_Framework_TestCase;
use Xmlps\UnitTest\ModelTest;
use Manager\Entity\Metadata;

class MetadataEntityTest extends ModelTest
{
    protected $metadataDAO;
    protected $citationStyles;

    /**
     * Initialize the test
     *
     * @return void
     */
    public function setUp() {
        parent::setUp();

        $this->metadataDAO = $this->sm->get('Manager\Model\DAO\MetadataDAO');
        $this->citationStyles = $this->sm->get('CitationstyleConversion\Model\Citationstyles');
    }

    /**
     * Tests if the setCitationStyleFileByHash() method populates the
     * citationStyleFile correctly
     *
     * @return void
     */
    public function testCitationStyleByFileHash()
    {
        $metadata = $this->metadataDAO->getInstance();
        $citationStyles = $this->citationStyles->getStyleMap();

        $keys = array_keys($citationStyles);
        $key = array_pop($keys);

        $this->assertNull($metadata->citationStyleFile);
        $metadata->setCitationStyleFileByHash($key);
        $this->assertNotNull($metadata->citationStyleFile);
        $this->assertTrue($metadata->citationStyleFile == $citationStyles[$key]['file']);
    }
}
