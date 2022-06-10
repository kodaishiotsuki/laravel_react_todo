<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToDo\StoreRequest;
use App\Http\Requests\ToDo\UpdateRequest;
use App\Models\ToDo;
use Illuminate\Http\Request;

class ToDoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //ToDoを取得する
        $toDos = ToDo::with('toDoDetails')->get(); //ToDoDetailsを一緒に持ってくる

        //取得したToDoを返却する
        return $toDos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        //新規のToDoモデルを作成
        $toDo = new ToDo();

        //タイトルをToDoモデルに設定する
        $toDo->title = $request->get('title');

        //DBにデータを登録
        $toDo->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        //IDに紐づくToDoモデルを取得
        $toDo = ToDo::find($id);

        //タイトルをToDoモデルに設定
        $toDo->title = $request->get('title');

        //ToDoDBを更新
        $toDo->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //IDに紐づくToDoモデルを取得
        $toDo = ToDo::find($id);

        //ToDoデータベースから対象のレコードを削除
        $toDo->delete();
    }
}
