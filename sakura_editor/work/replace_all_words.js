// 置換したい前後の文字列を指定
var before = 'old_test';
var after = 'new_text';

// ファイルの先頭に移動
// GoFileTop() https://sakura-editor.github.io/help/HLP000228.html
Editor.GoFileTop();

// 描画を一時停止（高速化のため）
// SetDrawSwitch() https://sakura-editor.github.io/help/HLP000268.html#SetDrawSwitch
Editor.SetDrawSwitch(0);

// 全選択
// SelectAll() https://sakura-editor.github.io/help/HLP000044.html
Editor.SelectAll()

// 選択範囲取得
// https://sakura-editor.github.io/help/HLP000268.html#GetSelectedString
var searchWord = Editor.GetSelectedString(0);

// 行内の該当箇所をすべて置換
// https://learn.microsoft.com/ja-jp/previous-versions/visualstudio/visual-studio-2010/efy6s3e6(v=vs.100)
var convertedWord = searchWord.replace(new RegExp(before, 'g'), after);

// 置換後の行を挿入
// InsText() https://sakura-editor.github.io/help/HLP000288.html
Editor.InsText(convertedWord); 

// 描画を再開
Editor.SetDrawSwitch(1);

// 再描画
// Redraw() https://sakura-editor.github.io/help/HLP000187.html
Editor.Redraw();
