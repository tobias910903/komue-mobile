let speechSynthesisFun = {
    // 播放
    play(text) {
        this.cancel();
        let to_speak = window.speechSynthesis;
        to_speak = new SpeechSynthesisUtterance(text);

        // to_speak.lang = "zh-CN";
        // to_speak.rate = 1.4; // 设置播放语速，范围：0.1 - 10之间

        // 相关配置
        // text – 要合成的文字内容，字符串。
        // lang – 使用的语言，字符串， 例如："zh-CN"、"en-US"
        // voiceURI – 指定希望使用的声音和服务，字符串。
        // volume – 声音的音量，区间范围是0到1，默认是1。
        // rate – 语速，数值，默认值是1，范围是0.1到10，表示语速的倍数，例如2表示正常语速的两倍。
        // pitch – 表示说话的音高，数值，范围从0（最小）到2（最大）。默认值为1。

        window.speechSynthesis.speak(to_speak);
    },
    pause() { // 暂停
        window.speechSynthesis.pause();
    },
    resume() { // 继续播放
        window.speechSynthesis.resume();
    },
    cancel() { // 清除所有语音播报创建的队列
        window.speechSynthesis.cancel();
    },
    populateVoiceList() {  // 获取本地语言列表
        let voicesList = window.speechSynthesis.getVoices();
        console.log("获取语音列表___", voicesList);
    }
};

export default speechSynthesisFun;
