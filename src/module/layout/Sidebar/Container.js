import { createContainer } from '@/util'
import Component from './Component'
import UserService from '@/service/UserService'
import { message } from 'antd'

export default createContainer(Component, (state) => {
  return {
    isLogin: state.user.is_login,
    isAdmin: state.user.is_admin,
    profile: state.user.profile
  }
}, () => {
  const userService = new UserService()
  return {
    async logout () {
      const rs = await userService.logout()
      if (rs) {
        message.success('Log out successfully')
        userService.path.push('/login')
      }
    }
  }
})
