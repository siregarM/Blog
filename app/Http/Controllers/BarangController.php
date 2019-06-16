<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Barang;

class BarangController extends Controller
{
    //
    public function index(){
    	// $data['barang'] = Barang::all();
    	// return view('barang.index',$data);
    	return Barang::all();
    }

    public function store(Request $request)
    {
    	return Barang::create($request->all());
    }

    public function show($id)
    {
    	return Barang::findOrFail($id);
    }


    public function edit($id)
    {
        //
        return Barang::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        //
        $barangs = Barang::findOrFail($id);
        $barangs->update($request->all());

        return $barangs;
    }

     public function destroy($id)
    {
        //
        $barangs = Barang::findOrFail($id);
        $barangs->delete();
        return $barangs;
    }
}
 