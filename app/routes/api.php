<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['namespace' => 'Api'], function() {
    Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
        Route::post('/register', [\App\Http\Controllers\Api\Auth\RegisterController::class, 'register']);
    });

    Route::middleware('auth:api')->group(function () {
        Route::get('/profile', [\App\Http\Controllers\Api\User\ProfileController::class, 'show']);
    });

});
