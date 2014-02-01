<?php

namespace ApiTest\Controller;

use Api\Entity\Job;
use Xmlps\UnitTest\ControllerTest;

class SiteControllerTest extends ControllerTest
{
    protected $citationStyles;

    protected $user;

    /**
     * Set up the controller test
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();

        $this->citationStyles = $this->sm->get('CitationstyleConversion\Model\Citationstyles');

        $this->resetTestData();
    }

    /**
     * Tests if the citationstyle autocomplete action works correctly
     *
     * @return void
     */
    public function testCitationStyleAutocompleteAction()
    {
        $this->mockLogin($this->user);
        $styleMap = $this->citationStyles->getStyleMap();
        $citationStyle = array_pop($styleMap);
        $fragment = substr($citationStyle['title'], 0, 3);

        $this->dispatch('/api/site/citationStyleAutocomplete?fragment=' . urlencode($fragment));
        $this->assertResponseStatusCode(200);
        $response = json_decode($this->getResponse()->getContent());
        $this->assertTrue(is_object($response));
        $this->assertSame($response->status, 'success');
        $this->assertTrue(isset($response->autocomplete));
        $this->assertTrue(
            (strpos(strtolower($response->autocomplete[0]), strtolower($fragment)) !== false)
        );
    }

    /**
     * Creates test data for this test
     *
     * @return void
     */
    protected function createTestData()
    {
        // Create test user
        $this->user = $this->createTestUser();
    }

    /**
     * Cleans test data after test
     *
     * @return void
     */
    protected function cleanTestData()
    {
        $this->deleteTestUser();
    }
}
