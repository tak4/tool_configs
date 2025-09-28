// �{�R�[�h��Shift-JIS�ɂ��Ă����K�v������
// ���{�����������ہAJScript�́AGetSelectedString()�Ŏ擾�����������
// Shift-JIS�ň����炵��

// ���ꕶ�����G�X�P�[�v����
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// (�s, ��) �� (�s)�@�ɂ���
var before_line_and_column = '\\((\\d+),\\d+\\)';
var after_line_and_column = '($1)';

// �����R�[�h�\�L���폜����
var before_charcode = '(^.+)  \\[.+\\]:'
var after_charcode = '$1:'

// �t�@�C���̐擪�Ɉړ�
// GoFileTop() https://sakura-editor.github.io/help/HLP000228.html
Editor.GoFileTop();

// �`����ꎞ��~�i�������̂��߁j
// SetDrawSwitch() https://sakura-editor.github.io/help/HLP000268.html#SetDrawSwitch
Editor.SetDrawSwitch(0);

// �S�I��
// SelectAll() https://sakura-editor.github.io/help/HLP000044.html
Editor.SelectAll()

// �I��͈͎擾
// https://sakura-editor.github.io/help/HLP000268.html#GetSelectedString
var select_string = Editor.GetSelectedString(0);

// �s���Ƃɕ���
var lines = select_string.split(/\r?\n/);

// �t�H���_�s���擾����ׂ̐��K�\�����쐬
var regex_folder_line = /^�t�H���_ +(.+)/;

// �������ĊY������s�����𒊏o
var folder_line = "";
for (var i = 0; i < lines.length; i++) {
    if (regex_folder_line.test(lines[i])) {  // ���K�\���Ń}�b�`���邩�m�F
        folder_line = lines[i];
        // MessageBox(folder_line)
        break;
    }
}

// �t�H���_���̂ݎ擾����
var base_folder = folder_line.replace(regex_folder_line, '$1');
// ������\�܂ŏ��������̂ŁA\��t����
base_folder = base_folder + "\\";
// \���܂܂��̂ŃG�X�P�[�v����
base_folder = escapeRegExp(base_folder);
MessageBox(base_folder)

// �s���̊Y���ӏ������ׂĒu��
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://learn.microsoft.com/ja-jp/previous-versions/visualstudio/visual-studio-2010/efy6s3e6(v=vs.100)
var convertedWord = select_string.replace(new RegExp(before_line_and_column, 'g'), after_line_and_column);
convertedWord = convertedWord.replace(new RegExp(before_charcode, 'gm'), after_charcode);
convertedWord = convertedWord.replace(new RegExp(base_folder, 'g'), '');

// �u����̕������}��
// InsText() https://sakura-editor.github.io/help/HLP000288.html
Editor.InsText(convertedWord); 

// �`����ĊJ
Editor.SetDrawSwitch(1);

// �ĕ`��
// Redraw() https://sakura-editor.github.io/help/HLP000187.html
Editor.Redraw();