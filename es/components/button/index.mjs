import '../../utils/index.mjs';
import Button from './src/button.mjs';
import ButtonGroup from './src/button-group.mjs';
export { buttonEmits, buttonNativeTypes, buttonProps, buttonTypes } from './src/button2.mjs';
export { buttonGroupContextKey } from './src/constants.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install.mjs';

const ElButton = withInstall(Button, {
  ButtonGroup
});
const ElButtonGroup = withNoopInstall(ButtonGroup);

export { ElButton, ElButtonGroup, ElButton as default };
//# sourceMappingURL=index.mjs.map
