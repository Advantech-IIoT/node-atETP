//var binding_path = (win32or64() === 64) ? './binding/x64/node-atETP.node' : './binding/ia32/node-atETP.node';
var binding_path = './binding/' + process.platform + '-' + process.arch + '/node-atETP.node';
var binding = require(binding_path);

var ETP_inited = false;
/**
 * detect whether windows OS is a 64 bits or 32 bits
 * http://ss64.com/nt/syntax-64bit.html
 * http://blogs.msdn.com/b/david.wang/archive/2006/03/26/howto-detect-process-bitness.aspx
 * @return {number}
 */
function win32or64() {
    //xx  console.log(" process.env.PROCESSOR_ARCHITEW6432  =", process.env.PROCESSOR_ARCHITEW6432);
    if (process.env.PROCESSOR_ARCHITECTURE === "x86" && process.env.PROCESSOR_ARCHITEW6432) {
        return 64;
    }

    if (process.env.PROCESSOR_ARCHITECTURE === "AMD64" ) {
        return 64;
    }

    // check if we are running nodejs x32 on a x64 arch
    if (process.env.CURRENT_CPU === "x64") {
        return 64;
    }
    return 32;
}

function atETP()
{
    if (!ETP_inited) {
        atETP.prototype.init();
    }
}

function cleanup()
{
	binding.Close();
    ETP_inited = false;
}

atETP.prototype.init = function()
{
    /*
     * Open the Brightness driver.
     */
     binding.Open();
     ETP_inited = true;
};

atETP.prototype.ETPDataRead = function(label)
{
    
    return binding.ETPDataRead(label);
};

atETP.prototype.ETPDataWrite = function(label,text)
{
    
    return binding.ETPDataWrite(label,text);
};

atETP.prototype.ETPLockUnlockSet = function(address,password)
{
    
    return binding.ETPLockUnlockSet(address,password);
};

atETP.prototype.ETPLockStatusCheck = function(address)
{
    
    return binding.ETPLockStatusCheck(address);
};

process.on('exit', function (code) {
    cleanup();
});

process.on('uncaughtException', function (err) {
    console.error('UNCAUGHT EXCEPTION:', err);
    process.exit(1);
});


module.exports = new atETP;
