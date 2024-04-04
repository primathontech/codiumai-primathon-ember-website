import { helper } from '@ember/component/helper';
import { htmlSafe as EmberHtmlSafe } from '@ember/template';

export function htmlSafe([arg]) {
	// Same as default Ember's "htmlSafe" utility function
	// Should be used only with trusted "safe" strings
	return EmberHtmlSafe(arg);
}

export default helper(htmlSafe);
