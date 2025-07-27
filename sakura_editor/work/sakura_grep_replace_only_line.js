// (行, 列) を (行)　にする
var before_line_and_column = '\\((\\d+),\\d+\\)';
var after_line_and_column = '($1)';

// 文字コード表記を削除する
var before_charcode = '(^.+)  \\[.+\\]:'
var after_charcode = '$1:'

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
var select_string = Editor.GetSelectedString(0);

// 行ごとに分割
var lines = select_string.split(/\r?\n/);

// フォルダ行を取得する為の正規表現を作成
var regex_folder_line = /^フォルダ +(.+)/;

// 検索して該当する行だけを抽出
var folder_line = "";
for (var i = 0; i < lines.length; i++) {
    if (regex_folder_line.test(lines[i])) {  // 正規表現でマッチするか確認
        folder_line = lines[i];
        break;
    }
}

// フォルダ名のみ取得する
var base_folder = folder_line.replace(regex_folder_line, '$1');
MessageBox(base_folder)

// 行内の該当箇所をすべて置換
// https://learn.microsoft.com/ja-jp/previous-versions/visualstudio/visual-studio-2010/efy6s3e6(v=vs.100)
var convertedWord = select_string.replace(new RegExp(before_line_and_column, 'g'), after_line_and_column);
convertedWord = convertedWord.replace(new RegExp(before_charcode, 'gm'), after_charcode);
convertedWord = convertedWord.replace(new RegExp(base_folder, 'g'), '');

// 置換後の行を挿入
// InsText() https://sakura-editor.github.io/help/HLP000288.html
Editor.InsText(convertedWord); 


// 描画を再開
Editor.SetDrawSwitch(1);

// 再描画
// Redraw() https://sakura-editor.github.io/help/HLP000187.html
Editor.Redraw();