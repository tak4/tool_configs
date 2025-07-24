// 置換したい前後の文字列を指定
var before = 'old_test';
var after = 'new_text';

// 後方参照
// var before = '\\((\\d+),\\d+\\)';
// var after = '($1)';

// 選択文字列を取得
var text = Editor.GetSelectedString(0);
if (text !== '') {
    // "old"を"new"に置換
    var replaced = text.replace(new RegExp(before, 'g'), after);

    // 置換後の文字列を挿入（選択範囲を上書き）
    Editor.InsText(replaced);
} else {
    // 選択がない場合のメッセージ
    Editor.InfoMsg('文字列を選択してください。');
}