<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * @OA\Post(
     *   path="/login",
     *   tags={"Public"},
     *   @OA\Response(response="200",
     *     description="Login",
     *   )
     * )
     */
    public function login(Request $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();

            $token = $user->createToken('admin')->accessToken;

            return response()->json([
              'success'   => true,
              // 'common_data'   =>  $common->getBasicAuthData(),
              'token' => $token
          ]);
        }
        $Admin = User::where('email', $request->email)->first();
        if (!$Admin) {
          throw ValidationException::withMessages([
              'credential' => ['The provided credential(s) is/are incorrect.'],
          ]);
      }else if (!Hash::check($request->password, $Admin->password)) {
          throw ValidationException::withMessages([
              'credential' => ['The provided credential(s) is/are incorrect.'],
          ]);
      }
        
    }

    /**
     * @OA\Post(
     *   path="/register",
     *   tags={"Public"},
     *   @OA\Response(response="200",
     *     description="Register",
     *   )
     * )
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create(
            $request->only('first_name', 'last_name', 'email')
            + [
                'password' => Hash::make($request->input('password')),
                'role_id' => 1,
            ]
        );

        // return response($user, Response::HTTP_CREATED);
        return response()->json([
          "success" => true,
          "user" => $user
      ]);
    }

      public function logout(){
        {
      if (Auth::user()) {
        $user = Auth::user()->token();
        $user->revoke();

        return response()->json([
          'success' => true,
          'message' => 'Logout successfully'
      ]);
      }else {
        return response()->json([
          'success' => false,
          'message' => 'Unable to Logout'
        ]);
      }
     }
    }
}
