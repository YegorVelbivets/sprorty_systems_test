<?php

namespace App\UseCases\Auth;

use App\Models\User;
use App\Http\Requests\Auth\RegisterRequest;

class RegisterService
{
    private $mailer;
    private $dispatcher;

    public function __construct(/*Mailer $mailer, Dispatcher $dispatcher*/)
    {
        /*$this->mailer = $mailer;
        $this->dispatcher = $dispatcher;*/
    }

    public function register(RegisterRequest $request): void
    {
        $user = User::register(
            $request['name'],
            $request['email'],
            $request['password']
        );

        //$this->mailer->to($user->email)->send(new VerifyMail($user));
        //$this->dispatcher->dispatch(new Registered($user));
    }

    public function verify($id): void
    {
        /** @var User $user */
        $user = User::findOrFail($id);
        $user->verify();
    }
}
