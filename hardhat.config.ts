import { HardhatUserConfig } from "hardhat/config";
import "hardhat-gas-reporter";
import "@nomicfoundation/hardhat-toolbox";
// Case 1 - Baseline
const CASE1 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: false,
        cse: false,
        deduplicate: false,
      },
    },
  },
};

// Case 2 - Fewer runs
const CASE2 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 100,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 3 - No jumpdestRemover
const CASE3 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: false,
      details: {
        jumpdestRemover: false,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 4 - No orderLiterals
const CASE4 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: false,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 5 - No CSE
const CASE5 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: false,
        deduplicate: true,
      },
    },
  },
};

// Case 6 - No deduplicate
const CASE6 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: false,
      },
    },
  },
};

// Case 7 - Minimal Optimization
const CASE7 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: false,
        deduplicate: false,
      },
    },
  },
};

// Case 8 - More runs
const CASE8 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 500,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 9 - Deduplicate Off, CSE On
const CASE9 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: false,
        deduplicate: true,
      },
    },
  },
};

// Case 10 - No Optimizations
const CASE10 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: false,
    },
  },
};

// Case 11 - More runs for accuracy
const CASE11 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 300,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 12 - Custom Combination
const CASE12 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 13 - OrderLiterals Off
const CASE13 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: false,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 14 - Deduplicate Off
const CASE14 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: false,
      },
    },
  },
};

// Case 15 - CSE Enabled, Deduplicate Enabled
const CASE15 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 16 - More runs, CSE On
const CASE16 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 400,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 17 - No jumpdestRemover, CSE On
const CASE17 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: false,
        orderLiterals: true,
        cse: true,
        deduplicate: true,
      },
    },
  },
};

// Case 18 - Deduplicate Off, CSE Off
const CASE18 = {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        jumpdestRemover: true,
        orderLiterals: true,
        cse: false,
        deduplicate: false,
      },
    },
  },
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      CASE1,
      CASE2,
      CASE3,
      CASE4,
      CASE5,
      CASE6,
      CASE7,
      CASE8,
      CASE9,
      CASE10,
      CASE11,
      CASE12,
      CASE13,
      CASE14,
      CASE15,
      CASE16,
      CASE17,
      CASE18,
    ],
    overrides: {
      "contracts/ERC20/ERC20.test1.sol": CASE1,
      "contracts/ERC20/ERC20.test2.sol": CASE2,
      "contracts/ERC20/ERC20.test3.sol": CASE3,
      "contracts/ERC20/ERC20.test4.sol": CASE4,
      "contracts/ERC20/ERC20.test5.sol": CASE5,
      "contracts/ERC20/ERC20.test6.sol": CASE6,
      "contracts/ERC20/ERC20.test7.sol": CASE7,
      "contracts/ERC20/ERC20.test8.sol": CASE8,
      "contracts/ERC20/ERC20.test9.sol": CASE9,
      "contracts/ERC20/ERC20.test10.sol": CASE10,
      "contracts/ERC20/ERC20.test11.sol": CASE11,
      "contracts/ERC20/ERC20.test12.sol": CASE12,
      "contracts/ERC20/ERC20.test13.sol": CASE13,
      "contracts/ERC20/ERC20.test14.sol": CASE14,
      "contracts/ERC20/ERC20.test15.sol": CASE15,
      "contracts/ERC20/ERC20.test16.sol": CASE16,
      "contracts/ERC20/ERC20.test17.sol": CASE17,
      "contracts/ERC20/ERC20.test18.sol": CASE18,
    },
  },
  gasReporter: {
    enabled: true,
    gasPrice: 10,
    currency: "USD",
  },
};

export default config;
