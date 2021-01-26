<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;


class ProfileController extends Controller
{
    public function show()
    {
        return response()->json([
            'user' => \Auth::user()
        ], Response::HTTP_OK);
    }
}
