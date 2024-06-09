<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WPController extends Controller
{
    public function typeWorks()
    {
        return response()->json([
        "message" => "works"
        ]);
    }

    public function typeBlog()
    {
        return response()->json([
        "message" => "blog"
        ]);
    }
}