<?php

namespace App\Http\Controllers;

use App\Models\Contribution;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContributionController extends Controller
{
    public function new(Request $request){
        $body = json_decode($request->getContent(), true);

        $validator = Validator::make($body, [
            'name' => 'required|string',
            'amount' => 'required|integer'
        ]);

        if($validator->fails()){
            return Response([
                "msg" => "Failed to validate the given data"
            ], 400);
        }

        $contribution = Contribution::create([
            "name" => $body["name"],
            "amount" => $body["amount"],
            "verified" => false
        ]);

        if(!$contribution){
            return Response([
                "msg" => "Failed to save data in database"
            ], 501);
        }

        return Response([
            "msg" => "Succeess"
        ], 200);

    }

    public function get(Request $request){

        $contributions = Contribution::where('verified', true)->latest()->get();
        return $contributions;

    }

    public function adminGet(Request $request){
        $contributions = Contribution::all();
        return $contributions;
    }

    public function toggle(Request $request){
        $body = json_decode($request->getContent(), true);

        $validator = Validator::make($body, [
            "id" => "required"
        ]);

        if($validator->fails()){
            return Response([
                "msg" => "Failed to validate the given data"
            ], 400);
        }

        $contribution = Contribution::where("id", $body["id"])->first();

        if(!$contribution){
            return Response([
                "msg" => "Contribution not found"
            ], 404);
        }

        $contribution->verified = !($contribution->verified);
        
        $operation1 = $contribution->save();

        if(!$operation1){
            return Response([
                "msg" => "Failed to save the state"
            ], 501);
        }

        return Response([
            "newState" => $contribution->verified
        ], 200);

    }


}
