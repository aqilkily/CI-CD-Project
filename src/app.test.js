const iconv = require('iconv-lite');
const encodings = require('iconv-lite/encodings');
iconv.encodings = encodings;
//import util from 'util';
//global.TextEncoder = util.TextEncoder;

describe ('check html', ()=>{
    it('creates character element', ()=>{
        const jsdom = require('jsdom');
        const path = 'C:/Users/ASUS/Desktop/VS PROJECTS/BeginnerJumperGame/src/index.html';
        jsdom.JSDOM.fromFile(path)
        .then((dom)=>{
            const character = dom.window.document.getElementById('character')
            expect(character).not.toBe(null)
        }).catch((e)=>console.error(e.message))
    });
    it('creates obstacle element', ()=>{
        const jsdom = require('jsdom');
        const path = 'C:/Users/ASUS/Desktop/VS PROJECTS/BeginnerJumperGame/src/index.html';
        jsdom.JSDOM.fromFile(path)
        .then((dom)=>{
            const obs = dom.window.document.getElementById('obstacle')
            expect(obs).not.toBe(null)
        }).catch((e)=>console.error(e.message))
    });
})