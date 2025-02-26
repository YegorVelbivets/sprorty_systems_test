<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Controllers\Controller;
use App\UseCases\Auth\RegisterService;
use Illuminate\Http\Response;

class RegisterController extends Controller
{
    private $service;

    public function __construct(RegisterService $service)
    {
        $this->service = $service;
    }

    public function register(RegisterRequest $request)
    {
        $this->service->register($request);

        return response()->json([
            'success' => 'You was registered successfully.'
        ], Response::HTTP_CREATED);
    }
}
