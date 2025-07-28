// 全選択
Editor.SelectAll()
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
MessageBox(base_folder);

// 正規表現エスケープ関数
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\\/])/g, '\\$1');
}

// パスを全て削除
var replaced = select_string.replace(new RegExp(escapeRegExp(base_folder), 'g'), '');

MessageBox(replaced);