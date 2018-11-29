import Vue from 'vue';
import SvgIcon from '@/components/svgIcon/index.vue';
import iconMeta from '@/views/svg-icons/icons-meta';

Vue.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
const iconMap = requireAll(req);

iconMeta.setIconMap(iconMap);
