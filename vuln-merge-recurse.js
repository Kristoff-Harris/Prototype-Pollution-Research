// https://huntr.dev/bounties/ef387a9e-ca3c-4c21-80e3-d34a6a896262/

function merge(dst, ...sources) {
    for (src of sources) {
      for (let key in src) {
        let s = src[key], d = dst[key]
        if (Object(s) == s && Object(d) === d) {
          dst[key] = merge(d, s)
          continue
        }
        dst[key] = src[key]
      }
    }
    return dst
}

module.exports = merge;
