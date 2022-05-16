// 获取 package.json 内容
const pkg = require('../package')

// 获取 log 终端输入能力
const { log } = console

function printVersion () {
  log('mergeVideo ' + pkg.version)
  process.exit()
}
/**
 * 在终端输出指令提示使用信息
 */
function printHelp (code) {
  const lines = `
    Usage:
      mergeVideo -mp3 [mp3Path] -mp4 [mp4Path] -merge [mergePath]

    Options:
      -v, --version    print the version of mergeVideo
      -h, --help       display this message

    Examples:
      $ mergeVideo -mp3 ./music/test.mp3 -mp4 ./movie/test.mp4
    `
  log(lines)
  process.exit(code || 0)
}

module.exports = (printType, param) => {
  return printType === 'version' ? printVersion() : printHelp(param)
}
