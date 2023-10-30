# Project goals

This project compares the performance of the solidity benchmark among various options of the solc-compiler optimizer. Based on this, a frequently used optimizer setting is selected as a baseline, and the reason for this is analysed.

The soldity benchmarks are ERC20 and ERC721, which are commonly used.

The optimiser options were selected by referring to https://docs.soliditylang.org/en/v0.8.20/using-the-compiler.html#input-description.

# Test case

| Case    | runs | jumpdestRemover | orderLiterals | cse      | deduplicate | Comments                         |
| ------- | ---- | --------------- | ------------- | -------- | ----------- | -------------------------------- |
| Case 1  | 200  | Enabled         | disabled      | disabled | disabled    | Baseline                         |
| Case 2  | 100  | Enabled         | Enabled       | Enabled  | Enabled     | Fewer runs                       |
| Case 3  | 200  | Disabled        | Enabled       | Enabled  | Enabled     | No jumpdestRemover               |
| Case 4  | 200  | Enabled         | Disabled      | Enabled  | Enabled     | No orderLiterals                 |
| Case 5  | 200  | Enabled         | Enabled       | Disabled | Enabled     | No CSE                           |
| Case 6  | 200  | Enabled         | Enabled       | Enabled  | Disabled    | No deduplicate                   |
| Case 7  | 200  | Enabled         | Enabled       | Disabled | Disabled    | Minimal Optimization             |
| Case 8  | 500  | Enabled         | Enabled       | Enabled  | Enabled     | More runs                        |
| Case 9  | 200  | Enabled         | Enabled       | Enabled  | Disabled    | Deduplicate Off, CSE On          |
| Case 10 | 200  | Disabled        | Disabled      | Disabled | Disabled    | No Optimizations                 |
| Case 11 | 300  | Enabled         | Enabled       | Enabled  | Enabled     | More runs for accuracy           |
| Case 12 | 200  | Enabled         | Enabled       | Enabled  | Enabled     | Custom Combination               |
| Case 13 | 200  | Enabled         | Disabled      | Disabled | Disabled    | OrderLiterals Off                |
| Case 14 | 200  | Enabled         | Enabled       | Enabled  | Disabled    | Deduplicate Off                  |
| Case 15 | 200  | Enabled         | Enabled       | Disabled | Enabled     | CSE Enabled, deduplicate Enabled |
| Case 16 | 400  | Enabled         | Enabled       | Disabled | Enabled     | More runs, CSE On                |
| Case 17 | 200  | Disabled        | Enabled       | Disabled | Enabled     | No jumpdestRemover, CSE On       |
| Case 18 | 200  | Enabled         | Enabled       | Disabled | Disabled    | Deduplicate Off, CSE Off         |

# Deployment Gas

| Deployments    | % of limit | Deployment gas |
| -------------- | ---------- | -------------- |
| -------------- | ---------- | ----------     |
| ERC20_TEST1    | -          | 775867         |
| ERC20_TEST2    | -          | 574282         |
| ERC20_TEST3    | -          | 890027         |
| ERC20_TEST4    | -          | 574282         |
| ERC20_TEST5    | -          | 689851         |
| ERC20_TEST6    | -          | 636134         |
| ERC20_TEST7    | -          | 775879         |
| ERC20_TEST8    | -          | 574282         |
| ERC20_TEST9    | -          | 689851         |
| ERC20_TEST10   | -          | 1000809        |
| ERC20_TEST11   | -          | 574282         |
| ERC20_TEST12   | -          | 574282         |
| ERC20_TEST13   | -          | 574270         |
| ERC20_TEST14   | -          | 636134         |
| ERC20_TEST15   | -          | 574282         |
| ERC20_TEST16   | -          | 574282         |
| ERC20_TEST17   | -          | 682534         |
| ERC20_TEST18   | -          | 775879         |

# Performance (gas cost) for each function call

| Contract     | Method       | Avg   |
| ------------ | ------------ | ----- |
| ERC20_TEST1  | approve      | 46615 |
| ERC20_TEST1  | mint         | 33662 |
| ERC20_TEST1  | transfer     | 51945 |
| ERC20_TEST1  | transferFrom | 36352 |
| ERC20_TEST2  | approve      | 46383 |
| ERC20_TEST2  | mint         | 33514 |
| ERC20_TEST2  | transfer     | 51632 |
| ERC20_TEST2  | transferFrom | 35843 |
| ERC20_TEST3  | approve      | 46812 |
| ERC20_TEST3  | mint         | 33637 |
| ERC20_TEST3  | transfer     | 52012 |
| ERC20_TEST3  | transferFrom | 36285 |
| ERC20_TEST4  | approve      | 46383 |
| ERC20_TEST4  | mint         | 33514 |
| ERC20_TEST4  | transfer     | 51632 |
| ERC20_TEST4  | transferFrom | 35796 |
| ERC20_TEST5  | approve      | 46615 |
| ERC20_TEST5  | mint         | 33662 |
| ERC20_TEST5  | transfer     | 51946 |
| ERC20_TEST5  | transferFrom | 36351 |
| ERC20_TEST6  | approve      | 46368 |
| ERC20_TEST6  | mint         | 33514 |
| ERC20_TEST6  | transfer     | 51616 |
| ERC20_TEST6  | transferFrom | 35785 |
| ERC20_TEST7  | approve      | 46615 |
| ERC20_TEST7  | mint         | 33662 |
| ERC20_TEST7  | transfer     | 51945 |
| ERC20_TEST7  | transferFrom | 36352 |
| ERC20_TEST8  | approve      | 46383 |
| ERC20_TEST8  | mint         | 33514 |
| ERC20_TEST8  | transfer     | 51632 |
| ERC20_TEST8  | transferFrom | 35796 |
| ERC20_TEST9  | approve      | 46615 |
| ERC20_TEST9  | mint         | 33662 |
| ERC20_TEST9  | transfer     | 51946 |
| ERC20_TEST9  | transferFrom | 36351 |
| ERC20_TEST10 | approve      | 46964 |
| ERC20_TEST10 | mint         | 33739 |
| ERC20_TEST10 | transfer     | 52222 |
| ERC20_TEST10 | transferFrom | 36595 |
| ERC20_TEST11 | approve      | 46383 |
| ERC20_TEST11 | mint         | 33514 |
| ERC20_TEST11 | transfer     | 51632 |
| ERC20_TEST11 | transferFrom | 35796 |
| ERC20_TEST12 | approve      | 46383 |
| ERC20_TEST12 | mint         | 33514 |
| ERC20_TEST12 | transfer     | 51632 |
| ERC20_TEST12 | transferFrom | 35796 |
| ERC20_TEST13 | approve      | 46383 |
| ERC20_TEST13 | mint         | 33514 |
| ERC20_TEST13 | transfer     | 51632 |
| ERC20_TEST13 | transferFrom | 35796 |
| ERC20_TEST14 | approve      | 46368 |
| ERC20_TEST14 | mint         | 33514 |
| ERC20_TEST14 | transfer     | 51616 |
| ERC20_TEST14 | transferFrom | 35785 |
| ERC20_TEST15 | approve      | 46383 |
| ERC20_TEST15 | mint         | 33514 |
| ERC20_TEST15 | transfer     | 51632 |
| ERC20_TEST15 | transferFrom | 35796 |
| ERC20_TEST16 | approve      | 46383 |
| ERC20_TEST16 | mint         | 33514 |
| ERC20_TEST16 | transfer     | 51632 |
| ERC20_TEST16 | transferFrom | 35796 |
| ERC20_TEST17 | approve      | 46459 |
| ERC20_TEST17 | mint         | 33546 |
| ERC20_TEST17 | transfer     | 51707 |
| ERC20_TEST17 | transferFrom | 35923 |
| ERC20_TEST18 | approve      | 46615 |
| ERC20_TEST18 | mint         | 33662 |
| ERC20_TEST18 | transfer     | 51945 |
| ERC20_TEST18 | transferFrom | 36352 |

# Reference

[solc compiler option setting](https://docs.soliditylang.org/en/v0.8.20/using-the-compiler.html#input-description)
