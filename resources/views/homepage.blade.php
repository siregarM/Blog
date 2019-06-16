@extends('layouts.app')

@section('content')
<div class="container">
   <div class="jumbotron">
   	{{-- Pengganti <a href> --}}
   {{-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> --}}
    {{-- Pengganti <a href> --}}
    <div class="text-center">
    	<h1>KafeKoding</h1>
    	<p>CRUD application Laravel and Vue.js</p>	
    </div>
    
    <router-view></router-view>
</div>
</div>

@endsection
