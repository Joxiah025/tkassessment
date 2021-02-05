<?php
declare(strict_types=1);

namespace App\Tests\Models;

use PHPUnit\Framework\TestCase;
use App\Models\Restaurant;

final class RestaurantTest extends  TestCase {

    public function testFailure()
    {
        $file = __DIR__.'/../../Db/sample.json';
        $this->assertFileExists($file);
    }

    public function testLoadData() {
        $data = new Restaurant();
        $this->assertIsString($data->loadData());
    }

    public function testParseData() {
        $data = new Restaurant();
        $this->assertObjectHasAttribute("restaurants", $data->parseData());
    }
}