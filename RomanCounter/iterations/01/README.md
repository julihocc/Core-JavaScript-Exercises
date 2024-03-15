## `RomanNumerals` class

### `toRoman` method

The script first requires the `RomanNumerals` and `Counter` modules, and then creates new instances of these classes.

The `toRoman` method of the `RomanNumerals` class is called with the argument `1994`. This method converts the integer `1994` to its Roman numeral equivalent, which is "MCMXCIV". The result is then logged to the console.

Here's a step-by-step breakdown of how `1994` is converted to "MCMXCIV":

1. The largest Roman numeral that is less than or equal to `1994` is `M` (1000). So, the first character of the Roman numeral string is `M`, and `1000` is subtracted from `1994`, leaving `994`.

2. The largest Roman numeral that is less than or equal to `994` is `CM` (900). So, the next characters of the Roman numeral string are `CM`, and `900` is subtracted from `994`, leaving `94`.

3. The largest Roman numeral that is less than or equal to `94` is `XC` (90). So, the next characters of the Roman numeral string are `XC`, and `90` is subtracted from `94`, leaving `4`.

4. The largest Roman numeral that is less than or equal to `4` is `IV` (4). So, the last characters of the Roman numeral string are `IV`, and `4` is subtracted from `4`, leaving `0`.

5. Since there's nothing left to convert, the function returns the Roman numeral string, which is "MCMXCIV".

The `fromRoman` method of the `RomanNumerals` class is then called with the argument "MCMXCIV". This method converts the Roman numeral "MCMXCIV" back to its integer equivalent, which is `1994`. The result is then logged to the console.

### `fromRoman` method

The `fromRoman` function works with the Roman numeral "MCMXCIV" (which represents the number 1994) as follows:

1. The function starts with `result` set to 0 and `i` set to 0. `result` will hold the final integer value, and `i` is the index used to iterate through the characters of the Roman numeral string.

2. The function enters a while loop, which continues as long as `i` is less than the length of the Roman numeral string.

3. The current symbol is `M`, which corresponds to 1000 in the `romanToIntMap`. There is a next symbol, `C`, which corresponds to 100 in the `romanToIntMap`. Since 1000 is not less than 100, the function adds 1000 to `result` and increments `i` by 1.

4. The current symbol is now `C`, which corresponds to 100. The next symbol is `M`, which corresponds to 1000. Since 100 is less than 1000, the function adds 1000 - 100 = 900 to `result` and increments `i` by 2.

5. The current symbol is `X`, which corresponds to 10. The next symbol is `C`, which corresponds to 100. Since 10 is less than 100, the function adds 100 - 10 = 90 to `result` and increments `i` by 2.

6. The current symbol is `I`, which corresponds to 1. The next symbol is `V`, which corresponds to 5. Since 1 is less than 5, the function adds 5 - 1 = 4 to `result` and increments `i` by 2.

7. At this point, `i` is equal to the length of the Roman numeral string, so the function exits the loop.

8. The function returns `result`, which is now 1000 + 900 + 90 + 4 = 1994. This is the integer equivalent of the Roman numeral "MCMXCIV".