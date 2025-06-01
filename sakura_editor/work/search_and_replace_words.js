// 置換したい前後の文字列を指定
var before = 'old_test';
var after = 'new_text';

// ファイルの先頭に移動
// GoFileTop() https://sakura-editor.github.io/help/HLP000228.html
Editor.GoFileTop();

// 描画を一時停止（高速化のため）
// SetDrawSwitch() https://sakura-editor.github.io/help/HLP000268.html#SetDrawSwitch
Editor.SetDrawSwitch(0);

// ヒットしなくなるまで繰り返し
while (true) {
    // 検索（正規表現で行単位検索）
    // SearchNext() https://sakura-editor.github.io/help/HLP000061.html
    //   検索オプション  2068 = 0x0814
    //   0x04：正規表現
    //   0x10：検索ダイアログを自動的に閉じる
    //   0x800：検索キーを履歴に登録しない
    Editor.SearchNext('^.*' + before + '.*$', 2068);

    // 選択範囲取得
    // https://sakura-editor.github.io/help/HLP000268.html#GetSelectedString
    var searchWord = Editor.GetSelectedString(0);
    if (searchWord == '') break; // 見つからなければ終了

    // 行内の該当箇所をすべて置換
    // https://learn.microsoft.com/ja-jp/previous-versions/visualstudio/visual-studio-2010/efy6s3e6(v=vs.100)
    var convertedWord = searchWord.replace(new RegExp(before, 'g'), after);

    // 選択状態にある文字を削除 ※削除しなくても次のInsText()で選択中の文字列を置き換え可能
    // Delete()は1文字削除という説明になっているが、選択状態にある文字列が削除される。
    // Delete() https://sakura-editor.github.io/help/HLP000041.html
    // Delete(); 

    // 置換後の行を挿入
    // InsText() https://sakura-editor.github.io/help/HLP000288.html
    Editor.InsText(convertedWord

    ); 
}

// 描画を再開
Editor.SetDrawSwitch(1);

// 再描画
// Redraw() https://sakura-editor.github.io/help/HLP000187.html
Editor.Redraw();
