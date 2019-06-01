import SYSCONST from "../src/utils/sysconst"

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/auth/'+SYSCONST.PROJECT_NAME+'/login/login-check',
    type: 'post',
    response: config => {
      const { __userName } = config.body
      console.log("ddddd")
      console.log(config.body)

      const token = tokens[__userName]
      // mock error
      if (!token) {
        return {
          [SYSCONST.STATUS_KEY]: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          [SYSCONST.STATUS_KEY]: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/auth/'+SYSCONST.PROJECT_NAME+'/logout',
    type: 'get',
    response: _ => {
      return {
        [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
        data: 'success'
      }
    }
  }
]
