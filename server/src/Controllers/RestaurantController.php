<?php

namespace App\Controllers;

use App\Models\Restaurant;
use Laminas\Diactoros\Response\JsonResponse;

class RestaurantController {

    public function index() {
        $data = new Restaurant();
        return new JsonResponse(['status' => '200', 'data' => $data->parseData()], 200);
    }


}