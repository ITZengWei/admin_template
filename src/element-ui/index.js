import {
	// 布局组件
	Container,
	Header,
	Aside,
	Main,
	Footer,

	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Image,
	Button,
	Input,
	Select,
	Option,
	Icon,
	Message,
	Autocomplete

} from 'element-ui'

/* 引入样式 */
import 'element-ui/lib/theme-chalk/index.css'


export default {
	install(Vue) {
		/* 组装 组件 */
		Vue.use(Container)
		Vue.use(Header)
		Vue.use(Aside)
		Vue.use(Main)
		Vue.use(Footer)

		/* 菜单 组件 */
		Vue.use(MenuItemGroup)
		Vue.use(Menu)
		Vue.use(Submenu)
		Vue.use(MenuItem)

		/* 图片 组件 */
		Vue.use(Image)

		/* 图标 */
		Vue.use(Icon)

		/* 按钮 */
		Vue.use(Button)

		/* form 表单 */
		Vue.use(Input)
		Vue.use(Select)
		Vue.use(Option)
		Vue.use(Autocomplete)

		Vue.prototype.$message = Message


	}
}




