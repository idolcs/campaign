<?php

use App\Http\Controllers\ContributionController;
use App\Http\Middleware\PasswordVerify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::prefix("/contribution")->group(function(){
    Route::post('/new', [ContributionController::class, "new"]);
    Route::get("/get", [ContributionController::class, "get"]);
});


Route::prefix("/admin")->middleware(PasswordVerify::class)->group(function(){
    Route::post('/get', [ContributionController::class, "adminGet"]);
    Route::post('/toggle', [ContributionController::class, "toggle"]);
});