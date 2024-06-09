<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class LogRequests
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // リクエストの情報をログ出力
        Log::info('Request Log', [
            'url' => $request->fullUrl(),
            'method' => $request->method(),
            'ip' => $request->ip(),
            'input' => $request->all()
        ]);

        // レスポンスを取得
        $response = $next($request);

        // レスポンスの情報をログ出力
        Log::info('Response Log', [
            'status' => $response->status(),
            'content' => $response->getContent()
        ]);

        return $response;    
    }
}