// https://huntr.dev/bounties/a9f33039-addf-45b1-bf92-d7e3d9b2abc1/ 

/* Recursive object extending.
 *
 * |Name       |Type  |Desc              |
 * |-----------|------|------------------|
 * |destination|object|Destination object|
 * |...sources |object|Sources objects   |
 * |return     |object|Destination object|
 */

/* example
 * extendDeep({
 *     name: 'RedHood',
 *     family: {
 *         mother: 'Jane',
 *         father: 'Jack'
 *     }
 * }, {
 *     family: {
 *         brother: 'Bruce'
 *     }
 * });
 * // -> {name: 'RedHood', family: {mother: 'Jane', father: 'Jack', brother: 'Bruce'}}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function extendDeep(destination: any, ...sources: any[]): any;
 */

_('isPlainObj each cloneDeep');

exports = function(obj) {
    let i = 0;
    let ret = obj;
    const len = arguments.length;

    while (++i < len) {
        obj = arguments[i];

        if (isPlainObj(ret) && isPlainObj(obj)) {
            each(obj, function(val, key) {
                if (key === '__proto__') return;
                ret[key] = exports(ret[key], obj[key]);
            });
        } else {
            ret = cloneDeep(obj);
        }
    }

    return ret;
};
