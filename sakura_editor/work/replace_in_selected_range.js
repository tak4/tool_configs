// �u���������O��̕�������w��
var before = 'old_test';
var after = 'new_text';

// ����Q��
// var before = '\\((\\d+),\\d+\\)';
// var after = '($1)';

// �I�𕶎�����擾
var text = Editor.GetSelectedString(0);
if (text !== '') {
    // "old"��"new"�ɒu��
    var replaced = text.replace(new RegExp(before, 'g'), after);

    // �u����̕������}���i�I��͈͂��㏑���j
    Editor.InsText(replaced);
} else {
    // �I�����Ȃ��ꍇ�̃��b�Z�[�W
    Editor.InfoMsg('�������I�����Ă��������B');
}