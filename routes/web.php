<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Home/Home");
});


Route::get('/admin', function () {
    return Inertia::render("Admin/Admin");
});