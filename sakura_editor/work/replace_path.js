// 全選択
Editor.SelectAll()
var select_string = Editor.GetSelectedString(0);

// 正しいパスリテラルを記述（\\でエスケープ！）
var raw_path = 'D:\\develop\\github\\tool_configs\\sakura_editor\\work\\sakura_grep';

// 正規表現エスケープ関数
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\\/])/g, '\\$1');
}

// パスを全て削除
var replaced = select_string.replace(new RegExp(escapeRegExp(raw_path), 'g'), '');

MessageBox(replaced);