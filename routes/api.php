<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\WPController;


Route::get('/type-works', [WPController::class, 'typeWorks']);
Route::get('/type-blog', [WPController::class, 'typeBlog']);