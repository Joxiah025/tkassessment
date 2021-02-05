<?php
namespace App\Models;

class Restaurant {

    /**
     * @return false|string
     */
    public function loadData() {
        return file_get_contents(__DIR__.'../../Db/sample.json');
    }

    /**
     * @return mixed
     */
    public function parseData() {
        return json_decode($this->loadData(),
            false);
    }
}