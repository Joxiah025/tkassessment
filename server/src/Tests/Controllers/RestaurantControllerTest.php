<?php


namespace App\Tests\Controllers;
use GuzzleHttp\Client;
use PHPUnit\Framework\TestCase;

final class RestaurantControllerTest extends TestCase
{
    public function testIndex() {
        $client = new Client();
        $response = $client->get('http://127.0.0.1:8000');

        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), false);
        $this->assertObjectHasAttribute('status', $data);
    }
}