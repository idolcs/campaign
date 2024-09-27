<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PasswordVerify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $body = json_decode($request->getContent(), true);

        if(!isset($body["password"])){
            return Response([
                "msg" => "Password not set"
            ], 400);
        }

        if($body["password"] != env("ADMIN_PASSWORD")){
            return Response([
                "msg" => "Incorrect Password"
            ], 401);
        }

        return $next($request);
    }
}
