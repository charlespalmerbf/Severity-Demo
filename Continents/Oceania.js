import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Svg, {G, Path, Circle, Text} from 'react-native-svg';

const Oceania = ({
  selected,
  setSelected,
  onSelectContinent,
  color,
  colors,
  selectedColor,
}) => {
  return (
    <G
      onPressIn={() => {
        onSelectContinent('Oceania');
        selected !== 'Oceania' ? setSelected('Oceania') : setSelected('');
      }}>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1989.1 624.9 1988.8 625 1988.9 624.6 1989.1 624.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1981.6 623.3 1981.8 623.5 1982.1 623.6 1982.1 623.9 1981.6 624.1 1981.1 623.8 1980.6 624.1 1980.3 624.1 1980.1 624.4 1980.2 624.7 1979.8 624.6 1979.7 624.8 1979.3 624.7 1979.2 624.8 1978.8 624.6 1979.1 624.5 1979.3 624.4 1979.5 624.2 1979.9 624.3 1980.2 624 1980.4 623.7 1980.9 623.6 1981.4 623.3 1981.6 623.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1982.5 623.2 1982.3 623.3 1982.1 623.2 1982.3 623 1982.5 623.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1988.4 617.1 1988.5 617.6 1988.3 618.2 1988.2 618 1988.1 617.6 1987.9 617.6 1988 617.1 1988.2 617 1988.4 617.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1985.8 615.7 1985.7 615.7 1985.6 615.3 1985.8 615.1 1986.2 615 1986.2 615.4 1986 615.6 1985.8 615.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1983.6 613.2 1983.5 613.6 1983.8 613.8 1983.9 614.1 1984.2 614.5 1984.5 614.6 1984.6 614.9 1984.8 614.9 1984.9 615.3 1984.6 615.8 1984.7 616 1984.8 616.5 1984.5 616.7 1984.5 617.2 1984.7 617.2 1984.8 617.7 1984.5 618 1983.9 618.2 1983.8 618 1983.5 618.1 1983.4 618.3 1983.1 618 1982.3 618.3 1981.5 619 1981.2 618.9 1980.8 619.1 1980.5 619 1979.9 619.1 1979.6 618.9 1978.7 618.6 1978.4 618.5 1977.8 618.4 1977.6 618.3 1977.1 618.1 1976.9 617.1 1977.2 616.4 1977.5 616.4 1977.8 616.3 1977.9 615.8 1978.2 615.7 1978.3 615.3 1978.1 615.1 1978.7 614.7 1979.1 614.2 1979.2 614.3 1979.8 613.8 1980 613.8 1980.9 613.4 1981.5 613.6 1981.8 613.5 1982.3 613.3 1982.9 613.2 1983.2 612.9 1983.6 613.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1989.9 613.4 1989.7 613.5 1989.9 612.6 1990.3 612.6 1990.2 613 1989.9 613.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1978.5 611.4 1978.3 611.7 1977.8 612 1977.8 611.7 1978.2 611.3 1978.5 611.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1993.4 611 1993.2 610.8 1993.3 610.6 1993.8 610.1 1994.1 609.6 1993.8 610.7 1993.4 611 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Fiji"
        d="M 1994.4 606 1994 606.4 1993.2 607.5 1992.9 607.6 1992.2 608 1992 608.6 1991.6 608.8 1991.4 609.1 1991.3 609.3 1991.6 609.4 1992.2 609.1 1992.3 609 1992.6 608.7 1992.8 608.4 1993.4 608.1 1993.7 607.8 1994.3 607.5 1994.3 607.8 1993.8 608.5 1993.6 608.6 1993.7 609.2 1993.4 609.5 1993.1 609.2 1992.7 609.2 1992.2 609.3 1991.8 609.6 1991.1 609.7 1990.1 609.7 1990.6 609.2 1990.2 609 1989.6 609.2 1989.2 609.4 1989.2 609.6 1988.9 609.7 1988.7 609.8 1988.6 610.2 1988.4 610.5 1988.1 610.4 1988.1 610.2 1987.7 610.1 1987.3 610.3 1987.1 610.8 1986.8 611 1986.5 611 1986.5 610.7 1986.5 610.3 1986.3 609.9 1986.4 609.7 1986.3 609.6 1985.7 609.8 1985.7 609.4 1986.1 609.1 1986.2 609.1 1986.1 608.6 1986.4 608.5 1986.9 608.8 1987.5 608.4 1987.7 608.4 1988 608.1 1988.2 608.1 1988.5 607.8 1988.5 607.6 1989.3 607.5 1990.2 607.2 1990.5 607.1 1990.9 607.2 1991.4 607 1991.6 606.6 1991.8 606.6 1992 606.2 1992.4 606.3 1992.5 606.1 1992.7 606.2 1993.7 605.7 1993.8 606 1994 605.9 1994.2 606 1994.5 605.7 1995 605.5 1995.1 605.6 1994.6 606 1994.4 606 Z"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Papua New Guinea"
        d="M 1868.1 545.6 1866.5 546.3 1864.2 543.8 1862 539.7 1861.2 534.8 1862 534.2 1862.5 536.1 1864.1 537.6 1866.5 541.6 1869 543.8 1868.1 545.6 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Papua New Guinea"
        d="M 1846.7 537 1843.7 537.5 1842.7 539.3 1839.5 540.9 1836.5 542.4 1833.4 542.4 1828.9 540.5 1825.8 538.7 1826.4 536.7 1831.4 537.7 1834.6 537.2 1835.6 534.1 1836.5 533.9 1836.8 537.3 1840 536.9 1841.8 534.7 1845.1 532.4 1844.7 528.6 1848.1 528.5 1849.2 529.5 1848.8 533.1 1846.7 537 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Papua New Guinea"
        d="M 1782.9 560.4 1784.5 539.4 1785.5 518.5 1795.1 522.9 1805.4 526.6 1809.1 529.9 1812.1 533.1 1812.7 536.9 1821.9 540.9 1823 544.3 1817.8 545 1818.7 549.3 1823.4 553.5 1826.4 560.3 1829.7 560.1 1829.1 562.9 1833.4 564 1831.6 565.2 1837.3 567.9 1836.4 569.8 1832.6 570.2 1831.4 568.6 1826.7 567.8 1821.1 566.9 1817.1 562.8 1814.3 559.2 1811.8 553.6 1804.7 550.8 1799.8 552.6 1796.1 554.8 1796.4 559.5 1791.8 561.7 1788.7 560.6 1782.9 560.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Papua New Guinea"
        d="M 1853.6 530.7 1851.8 532.4 1850.9 528.6 1849.8 526.2 1847.3 524.1 1844.2 521.3 1840.2 519.4 1841.8 517.9 1844.8 519.7 1846.7 521.1 1849 522.6 1851.1 525.3 1853.2 527.4 1853.6 530.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1926.8 576.2 1927.1 576.4 1927 576.8 1927.3 576.8 1927.3 577 1926.5 577 1926.2 576.5 1926.4 576.2 1926.8 576.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1888.5 575.6 1888.7 575.6 1889.7 576.4 1890.2 576.7 1891.1 577.4 1891 577.7 1890.8 577.7 1890.6 577.9 1890.4 577.6 1890.3 577.6 1890.1 577.4 1890 577 1889.6 576.9 1889.6 576.6 1889.3 576.5 1889.2 576.6 1889 576.6 1888.1 576.2 1887.9 575.8 1888.2 575.4 1888.5 575.6 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1925.4 574.1 1925.2 574.4 1924.9 574.2 1924.9 574 1925.2 573.8 1925.4 574.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1923.1 570.2 1923.2 570.3 1923.5 570.3 1923.4 570.7 1922.9 570.9 1922.6 570.9 1922.2 571 1921.8 571.6 1921.7 571.3 1921.4 571.4 1921.2 571.2 1921.2 570.9 1921.7 570.8 1921.7 570.6 1922 570.2 1922.7 570.3 1923.1 570.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1896.8 567.4 1897.1 567.3 1897.7 567.6 1898.2 568.1 1898.5 568.4 1898.7 568.4 1898.9 568.6 1899.1 568.6 1899.4 568.9 1899.7 568.8 1900.1 568.9 1900.3 569.1 1900.7 569.1 1901 569 1901.2 569.3 1901.4 570.1 1901.7 570.4 1901.7 570.9 1901.5 571.1 1901.6 571.4 1901.2 571.2 1900.9 571.4 1900.6 571.3 1900.1 571 1899.9 571 1899.3 570.8 1898.9 570.7 1898.7 570.4 1898.4 570.2 1898.1 570.1 1897.9 569.8 1897.5 569.6 1897.7 569.2 1897.6 568.8 1897.6 568.4 1897.4 568.3 1896.8 568.1 1896.5 568.2 1896.4 568 1896.5 567.7 1896.6 567.4 1896.8 567.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1900.8 564 1900.7 564.2 1900.7 564.9 1900.5 564.7 1900.5 564.2 1900.8 564 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1897.9 562.2 1898.2 563.1 1898.4 563.5 1898.4 563.9 1898.5 564.4 1898.3 564.7 1897.9 564 1897.8 564.3 1897.5 563.8 1897.6 562.8 1897.7 562.6 1897.7 562.3 1897.9 562.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1889.5 562.4 1889.8 562.4 1890.1 562.3 1890.5 562.4 1890.6 562.3 1891.1 562.3 1891.9 562.3 1892.1 562.6 1892.4 562.7 1892.6 563 1892.8 563 1893 563.1 1893.4 563.5 1893.4 564.1 1893.6 564.1 1894 564.3 1894.1 564.6 1894.1 565.2 1894 565.3 1893.3 565.5 1893.1 565.6 1892.7 565.5 1892.3 565.3 1891.9 565.3 1891.8 565.1 1891.3 564.8 1890.7 564.8 1890.2 564.9 1889.7 564.9 1889.2 564.8 1888.9 564.6 1888.6 564.7 1888.3 564.3 1888 564.1 1887.7 563.3 1887.5 562.9 1887.7 562.7 1887.6 562.5 1887.6 561.8 1887.7 561.5 1888.3 561.2 1888.7 561.4 1889.1 561.9 1889.2 562.2 1889.5 562.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1891.8 560 1892.3 560.5 1892 560.8 1891.7 560.6 1891.7 560.5 1891.8 560 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1891.8 560 1891.6 560.4 1891.5 560.4 1891.1 560.1 1890.8 560.2 1890.6 560.1 1890.5 559.9 1890.8 559.8 1891 559.6 1891.5 559.7 1891.8 560 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1885.2 559.5 1885.3 559.7 1885.5 559.8 1885.3 560.2 1884.9 560.4 1884.6 560 1885.2 559.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1876.7 557.7 1876.9 558 1876.8 558.3 1876 557.9 1876.5 557.6 1876.7 557.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1880.1 558.5 1879.8 558.3 1879.9 558 1880.2 557.7 1880.2 558.2 1880.3 558.4 1880.1 558.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1879.2 556.7 1879.4 556.6 1879.8 556.6 1879.8 556.8 1879.4 557.1 1879.6 557.3 1879.6 557.6 1879.2 558 1879 558.1 1878.7 558 1878.3 557.6 1878.4 557 1878.7 556.9 1878.9 556.5 1879.2 556.4 1879.2 556.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1875.6 556.8 1875.4 556.9 1875.2 557.4 1875.6 557.9 1875.1 557.7 1875.1 557.5 1875 557.2 1874.6 556.8 1874.6 556.6 1875 556.4 1875.1 556.1 1875.5 555.8 1875.8 556 1875.8 556.4 1875.6 556.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1888.5 556.3 1888.7 556.5 1888.6 556.7 1888.4 556.6 1887.8 556.1 1888 555.7 1888.3 555.6 1888.5 555.8 1888.4 556.1 1888.5 556.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1895 555.5 1895.4 556.3 1896 557.1 1896 557.4 1895.6 557.6 1895.6 558.1 1895.6 558.4 1895.7 558.6 1895.9 558.6 1896.1 558.9 1896.6 559.3 1896.7 559.8 1896.8 560.1 1897 560.3 1896.8 560.5 1897.1 560.8 1897 560.9 1897.1 561.4 1896.9 561.6 1897.2 561.9 1897.3 562.4 1897.5 562.9 1897.5 563.5 1897.4 563.6 1897.1 563.3 1896.8 562.8 1896.8 562.5 1896.5 562.1 1896.1 561.8 1895.8 561.5 1895.3 560.9 1894.9 560.6 1894.6 559.7 1894.4 558.7 1894.2 558 1894.2 557.5 1894.1 557.1 1894.5 556.7 1894.4 556.4 1893.9 555.7 1893.8 555.4 1893.9 555.3 1894.3 555.4 1894.5 555.5 1894.8 555.2 1895 555.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1874.3 555.2 1874.1 554.8 1873.8 554.5 1874.2 554.5 1874.3 555.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1874.2 554.2 1874.6 554.3 1874.7 554.4 1874.8 554.9 1874.6 554.9 1874.4 554.5 1874.2 554.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1877.3 554.4 1877.2 554.7 1877.4 554.7 1877.9 554.7 1878.3 555.4 1878.3 555.6 1878.5 555.9 1878.6 556.4 1878.4 556.6 1878.4 556.9 1877.8 556.7 1877.6 556.5 1877.3 556.5 1876.9 556.2 1876.8 556 1876.7 555.7 1877.1 555.8 1876.8 555 1876.7 554.8 1876.2 554.9 1876 555 1875.6 555 1875.3 555.4 1874.9 555.2 1874.9 554.6 1875.1 554.4 1875.5 554.4 1875.5 554 1875.9 553.4 1876.3 553.1 1876.6 552.9 1877 553.2 1877.2 553.6 1877.1 554.3 1877.3 554.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1871.4 554.4 1871.3 554.4 1871.1 553.6 1871.2 553.3 1871.2 552.9 1871.4 553 1871.5 553.4 1871.5 554.1 1871.4 554.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1874.8 553.9 1874.5 554.1 1874.4 554 1874 554 1873.7 553.7 1873.6 553.4 1873.5 553.1 1873.6 552.8 1873.9 552.4 1874.4 552.2 1874.6 552.4 1874.9 552.9 1874.9 553.5 1874.8 553.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1871.8 550.4 1872.2 550.9 1872.2 551 1872.9 551.4 1872.8 551.7 1872.2 552.4 1872.2 552.7 1871.9 552.8 1871.9 552.4 1871.7 552.4 1871.7 552 1871.5 551.6 1871.2 551.4 1871.1 551.1 1871.2 550.8 1871.4 550.6 1871.6 550.4 1871.8 550.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1882.1 550.5 1882.4 550.7 1882.2 550.8 1881.7 550.9 1881.6 550.6 1881.8 550.4 1882.1 550.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1883 550.5 1883.2 550.4 1883.7 550.7 1884 550.8 1884.2 551 1884.5 551.5 1884.8 551.6 1885.1 551.9 1885.1 552.2 1885.6 552.3 1885.6 552.6 1885.9 552.7 1886.2 552.6 1886.3 552.7 1886.7 552.9 1886.8 553.1 1887.1 553 1887.4 553.1 1887.5 553.4 1887.9 553.7 1888.2 554 1888.6 554.3 1889.6 555.3 1889.3 555.7 1889.6 556.2 1889.7 556.8 1889.4 556.7 1889.1 556.3 1888.4 555.5 1888 555.4 1887.5 555 1886.9 554.9 1886.8 554.6 1886.2 554.4 1885.7 553.9 1885.5 553.9 1884.7 553.3 1884.2 553 1884.2 552.8 1883.8 552.6 1883.6 552.4 1883.4 552 1883 551.7 1882.9 551.5 1882.9 551.1 1882.5 550.6 1882.3 550.5 1882.3 550.2 1883 550.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1881.5 549.9 1881.7 550.1 1881.9 550 1882.2 550.2 1882.1 550.4 1881.8 550.3 1881.5 549.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1877 549.3 1877.5 549.3 1877.3 549.5 1877 549.4 1877 549.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1881.3 549.3 1881.1 549.8 1881 549.6 1881.3 549.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1878.6 549.7 1878.1 549.8 1877.9 549.6 1878.2 549.2 1878.5 549.3 1878.6 549.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1866.1 548.8 1866.3 549.1 1866.1 549.3 1865.8 549.2 1865.7 549.1 1866.1 548.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1867.6 546.9 1867.9 547.1 1867.8 547.4 1867.1 547.6 1866.8 547.3 1867.1 546.7 1867.3 546.6 1867.6 546.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1869.3 546 1869.3 546.5 1869.1 546.3 1869.1 546.1 1869.3 546 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Solomon Islands"
        d="M 1872.2 544.5 1872.5 544.6 1872.9 545.1 1873.2 545.3 1873.5 545.4 1873.8 545.7 1874.6 546.1 1875 546.6 1875 547 1875.1 547.6 1875.3 547.8 1875.6 548.1 1875.8 548.1 1875.9 548.5 1876.6 548.8 1877 548.7 1877.1 548.8 1877.1 549.1 1876.8 549.2 1876.6 549.5 1876.1 549.3 1875.3 548.9 1874.8 548.9 1874.5 548.5 1873.8 548.1 1873.2 547.1 1872.6 546.1 1872.1 545.8 1871.4 545.1 1871.4 544.6 1871.4 544.4 1871.7 544.2 1872 544.3 1872.2 544.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        d="M1953.8 456l1 0.4-0.2 0-0.8-0.4z"
        id="MH"
        name="Marshall Islands"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Federated States of Micronesia"
        d="M 1909.4 467.7 1909.2 468 1908.7 467.9 1908.7 467.7 1909.2 467.3 1909.4 467.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Federated States of Micronesia"
        d="M 1881.2 457.1 1881.6 457.1 1881.9 457.3 1882 457.7 1881.8 457.8 1881.9 458 1881.8 458.2 1881.2 458.2 1881 458 1881 457.8 1880.8 457.5 1880.8 457.2 1881.2 457.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Federated States of Micronesia"
        d="M 1766.5 440.5 1766.6 440.8 1766.3 440.8 1766 441.3 1765.9 441.2 1766.2 440.4 1766.6 440.3 1766.5 440.5 Z"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Zealand"
        d="M 1886.2 764.4 1885.4 767 1891 764.4 1890.5 767.1 1888.4 769.8 1884.2 772.7 1877.1 777.4 1872.4 780 1871.8 783 1867.8 783.1 1861.5 785.5 1856.8 789.6 1848.6 796 1842.3 798.8 1838.3 800.6 1833.7 800.5 1832.2 798.4 1827.1 798 1828.1 795.6 1834.6 791 1846 784.7 1850.3 783.5 1855.9 781.1 1862.9 777.8 1868.6 774.5 1874.6 769.8 1877.7 768.2 1881.2 764.6 1887 761.7 1886.2 764.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Zealand"
        d="M 1915.2 733.9 1914.8 740.7 1917.7 736.3 1919 738.1 1916.6 742.9 1919.5 745 1922.7 745.5 1927.4 743.1 1929.6 743.8 1924.4 749.5 1920.2 753.2 1916.3 753.1 1913.5 755 1912 757.8 1910.4 758.9 1905.8 762.4 1899.9 766.7 1893.9 769.3 1894.4 767.6 1892.9 766.7 1899.8 761.5 1900.7 757.9 1896.9 755.4 1898.7 753.1 1904 750.9 1908.2 745.9 1910.7 741.8 1911.3 737.5 1912.1 736.4 1911.2 733.7 1910.5 728.1 1910.9 723.5 1913.1 723 1914 726.6 1917.2 728.2 1915.2 733.9 Z"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1931.8 631.8 1931.3 631.6 1931.5 631.2 1932 631.1 1932.2 631.5 1932.1 631.7 1931.8 631.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1930.6 628 1930.4 628 1930.1 627.9 1929.7 627.4 1929.6 627 1929.6 626.6 1929.8 626.4 1929.9 626 1930.2 625.9 1930.6 625.9 1930.4 626.2 1930.4 626.7 1931.1 627.2 1930.8 627.5 1930.6 628 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1930.6 622.1 1930.9 622.1 1931 622.3 1930.5 622.4 1930.6 622.7 1931 622.9 1931.1 623.2 1931 623.6 1930.6 623.7 1930.2 623.4 1929.8 623.4 1929.6 623.2 1929.3 623 1929.4 622.6 1929.4 622.3 1929.6 621.8 1929.9 621.4 1930.4 621.4 1930.6 621.5 1930.5 621.9 1930.6 622.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1927.6 614.5 1928.2 614.4 1928.3 614.5 1928.5 615.1 1928.7 615.4 1928.8 615.5 1928.4 616.1 1927.6 616.3 1927.3 616 1927.2 615.5 1926.9 615.4 1926.5 615.7 1926.4 615.6 1926.6 615.2 1927 614.9 1927.4 614.4 1927.6 614.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1929.9 610.6 1929.8 610.3 1930.1 610.3 1929.9 610.6 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1928.3 608.2 1928.4 608.7 1928.4 608.9 1928.8 609 1929 609.5 1929.5 609.5 1929.5 609.9 1929.4 610 1929.1 609.7 1928.8 609.6 1928.2 609.8 1927.9 609.7 1927.8 609.5 1927.7 609.1 1927.9 608.6 1928.1 608.3 1928.3 608.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1929.2 608 1929.1 608 1929 607.7 1929.2 607.7 1929.2 608 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1929.4 606.6 1929.2 606.8 1928.6 606.8 1928.3 606.9 1928.1 606.7 1927.7 606.6 1927.2 606.2 1927.3 606 1927.8 605.8 1928.2 605.7 1928.6 605.4 1928.7 605.1 1928.9 605.1 1929 605.4 1929 606 1929.5 606.4 1929.4 606.6 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1924.7 605.3 1924.9 605.6 1925.5 606 1926.2 606.7 1926.3 606.8 1926.3 607.2 1926.5 607.5 1926.2 607.7 1925.8 608.1 1925.8 607.9 1925.5 607.8 1925.1 607.8 1924.9 607.9 1924.9 608.1 1924.5 608.3 1924.2 608.2 1924.2 607.5 1924.1 606.9 1924.2 606.3 1924.3 605.8 1924.1 605.3 1923.5 605.6 1923.3 605.4 1923.2 605.1 1923.2 604.8 1923.5 604.5 1923.5 604.1 1923.6 603.8 1923.9 603.7 1924.5 604 1924.4 604.2 1924.6 604.7 1924.5 604.9 1924.7 605.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1924.1 602.9 1923.8 602.9 1923.3 602.6 1923.3 602.5 1923.5 602.2 1923.7 602.1 1924.2 602.2 1924.1 602.6 1924.1 602.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1923.6 601.9 1924 601.6 1924.1 601.7 1924.2 602 1923.7 602 1923.6 601.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1929.3 604.5 1929.1 604.4 1929.2 603.2 1929.1 602.9 1929.2 602.4 1929.5 601.6 1929.6 601.1 1929.8 601.7 1929.7 602 1929.7 602.6 1929.7 603.6 1929.6 604.2 1929.3 604.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1928 601.2 1927.3 601.2 1927 601.1 1927 600.9 1927.9 600.2 1928.4 600 1928.9 599.9 1928.9 600.1 1928.6 600.5 1928.4 600.8 1928 601.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1929.9 600.5 1929.9 600.7 1929.6 600.7 1929.7 600.4 1929.9 599.1 1929.9 599 1930 597.8 1930.2 597.9 1930.1 599.2 1930.2 599.5 1930.1 600 1929.9 600.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1923.6 601.9 1922.7 601.8 1922.1 602.1 1922 602.3 1921.8 602.3 1921.7 601.7 1921.5 601.6 1921.1 600.6 1921.5 599.8 1921.5 599.4 1921.4 599.2 1921.4 597.8 1921.3 597.5 1921.3 597 1921.5 596.7 1921.5 596.4 1921.7 596.1 1921.7 595.9 1922 595.8 1922.1 596.3 1922.3 596.7 1922.5 597 1922.6 598.3 1922.5 599.1 1922.5 599.2 1923.1 599.1 1923.4 598.8 1923.6 598 1923.6 597.8 1923.9 597.6 1924.2 597.7 1924.1 598.1 1924.1 599 1924.4 599.1 1924.4 599.6 1924.2 599.7 1924.5 600.1 1924.3 600.3 1924.3 600.8 1924.5 601.3 1924.4 601.5 1924.1 601.5 1923.6 601.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1927.8 592.6 1928.2 592.9 1928.1 593.3 1927.8 593.6 1927.6 593.8 1927 593.8 1927 593.4 1927.1 593 1927.3 592.7 1927.8 592.6 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1928.4 590.7 1928.1 590.9 1927.9 591 1927.9 591.2 1927.7 591.3 1927.7 591 1927.5 590.8 1927.4 590.5 1927.5 590.1 1927.7 590 1928.1 589.8 1928.2 590 1928.3 590.4 1928.3 590.5 1928.4 590.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Vanuatu"
        d="M 1923.4 586.5 1923.3 586.4 1923.4 585.9 1923.6 586.1 1923.4 586.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Australia"
        d="M 1743 763.6 1746.7 765.8 1750 764.9 1754.9 763.7 1757.7 764.1 1753.2 771.7 1749.9 773.8 1745.9 779 1745.3 777.2 1738.7 781.6 1737.9 781.3 1734.9 781.1 1735.4 775.7 1737.4 771.5 1738 765.9 1740 763 1743 763.6 Z"></Path>

      <Path 
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'} 
        class="Australia" d="M 1793.5 590.2 1794.7 595.2 1798.7 592.8 1800.1 595.5 1802.4 598 1801.3 600.9 1801.5 606.4 1801.7 609.6 1803 610.4 1803.4 615.9 1802.2 619.2 1803 623.5 1808.4 626.9 1811.6 629.9 1814.8 632.7 1813.7 634.3 1816 638.3 1816.5 645.3 1819.1 643.9 1820.6 646.6 1822.2 645.7 1821.5 652.5 1824.4 656.4 1826.3 658.8 1829.1 664 1829.1 669.2 1828.1 672.9 1826.3 676.8 1827 682.3 1824.5 688 1822.4 691 1818.6 696.7 1817.1 700.4 1814 705 1809 710.8 1803.5 714 1799.1 718.9 1795.8 722.1 1791.4 727.6 1787.7 730.8 1783.8 735.6 1780.7 740 1779.9 742.1 1775.6 744.3 1769.5 744.5 1763.2 747.2 1759.4 749.6 1754.6 752.4 1751.9 749.5 1749.3 748.4 1751.9 745.1 1748.4 746.3 1741.2 750.9 1737.6 749.2 1735.2 748.2 1732.4 747.7 1728.3 745.9 1727 741.9 1728.5 737.1 1728.9 733.8 1727.5 731.2 1722.8 730.5 1726 727.3 1726.9 722.6 1722.2 727 1716.9 728.2 1721.4 724.7 1723.9 721 1727.4 717.8 1729 713.1 1722.2 718.5 1717.9 720.7 1713.6 725.8 1710.6 723.2 1712.3 719.8 1710.9 715.1 1709.1 712.7 1710.7 711.2 1705.4 707.3 1701.6 707.2 1697.6 704 1687.7 704.6 1679.8 706.9 1672.9 709.1 1667.9 708.7 1660.9 712 1655.6 713.4 1653.3 716.8 1650.3 719.4 1645.6 719.6 1642 720.1 1637.8 719 1633.6 719.7 1629.8 720 1625.3 723.4 1623.8 723.1 1620.4 724.9 1617 726.9 1613.2 726.7 1609.7 726.7 1605.6 722.6 1603.2 721.4 1604.7 717.7 1607.6 716.8 1609.1 715.4 1609.7 713.1 1612 708.6 1612.7 704.8 1612 698.3 1612.2 694.6 1613.6 691 1612.7 686.8 1613 684.9 1611.3 682.3 1612 677.3 1610.1 672.2 1610 669.5 1611.8 672.3 1611.3 666.3 1613.6 668.2 1614.7 670.7 1615.3 667.4 1613.7 662.3 1613.6 660.3 1612.8 658.4 1614.1 654.7 1615.6 653.1 1616.9 649.9 1617 646.1 1620.1 641.5 1619.7 646.4 1622.8 642 1627.7 639.8 1630.9 637.1 1635.6 634.7 1638.2 634.2 1639.6 635 1644.4 632.6 1647.9 631.9 1649 630.5 1650.5 629.9 1653.6 630.1 1659.8 628.2 1663.3 625.3 1665.3 621.9 1669.2 618.7 1669.9 616.1 1670.6 612.6 1675.5 607.1 1676.9 612.7 1679.5 611.4 1678 608.4 1680.3 605.3 1682.5 606.7 1684 601.8 1687.5 598.6 1689.3 596.1 1692.2 595 1692.6 593.2 1694.9 593.9 1695.3 592.3 1697.9 591.4 1700.7 590.5 1704.4 593.5 1707 597.3 1710.5 597.3 1714 597.9 1713.3 594.4 1716.8 589.3 1719.5 587.6 1718.9 586 1721.8 582.3 1725.5 580 1728.2 580.8 1733.1 579.6 1733.4 576.3 1729.5 574.2 1732.6 573.3 1736.2 574.9 1738.9 577.5 1743.4 579.1 1745.1 578.5 1748.4 580.5 1751.9 578.6 1753.9 579.2 1755.4 577.9 1757.6 581.1 1755.6 584.6 1753.1 587.2 1751.2 587.4 1751.5 589.9 1749.3 593.1 1746.8 596.3 1747 598.1 1750.8 601.7 1754.8 603.7 1757.3 605.9 1760.6 609.7 1762.2 609.7 1764.8 611.4 1765.3 613.4 1770.2 615.5 1774.3 613.3 1776.1 609.9 1777.8 607 1779.1 603.5 1781.7 598.4 1781.5 595.3 1782.2 593.4 1782.1 589.8 1783.5 584.9 1784.8 583.6 1784.2 581.5 1786 578.1 1787.5 574.6 1787.9 572.7 1790.2 570.3 1791.5 573.5 1791.4 577.5 1792.7 578.3 1792.6 581 1794.2 584.2 1794.1 587.9 1793.5 590.2 Z">
      </Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="American Samoa"
        d="M 27.7 593.3 27.4 593.7 27.2 594 27 594.1 26.6 593.8 26.8 593.6 27.1 593.6 27.2 593.4 27.7 593.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="American Samoa"
        d="M 34.3 593.3 33.8 593.4 33.7 593.2 34.1 593.1 34.3 593.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        d="M1747.7 453.1l-0.2 0.4 0.1 0.1-0.2 0.6 0.1 0.2-0.5 0.2-0.2-0.7 0.3-0.2-0.2-0.2 0.3-0.6 0.3-0.1 0.2 0.3z"
        id="PW"
        name="Palau"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        d="M1998.9 556.6l0-0.2 0.1 0 0 0.1-0.1 0.1z"
        id="TV"
        name="Tuvalu"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        d="M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z"
        id="NR"
        name="Nauru"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Tonga"
        d="M 14.7 639.5 14.2 639.2 14.2 639 14.5 638.8 14.7 639.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Tonga"
        d="M 11.9 637.4 12.2 637.4 12.6 637.7 12.9 637.8 13.1 637.4 13.4 637.7 13.1 638 13.2 638.2 13.1 638.4 12.9 638.3 12.6 638 11.9 637.8 11.9 637.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Tonga"
        d="M 11.1 628.8 10.9 628.9 10.8 628.4 11 628.5 11.1 628.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Tonga"
        d="M 15.5 621.3 15 621.6 14.8 621.6 14.7 621.5 15 621 15.3 621.1 15.5 621.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Tonga"
        d="M 1.4 602 1.3 602.1 1 602 1.1 601.8 1.4 601.8 1.4 602 Z"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1915.2 646.9 1915 647 1914.8 647.4 1914.4 647.2 1914.6 646.7 1914.7 646.5 1915 646.6 1915.2 646.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1919.6 639.1 1919.5 639.2 1919.7 639.6 1920 639.6 1920.4 639.4 1920.3 640 1920.1 640.2 1920 640.6 1919.5 640.9 1919.1 640.7 1919.1 640.6 1918.8 640.3 1918.9 640.1 1918.7 639.9 1918.8 639.5 1918.7 639.1 1918.8 639.1 1919.2 639.2 1919.6 639.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1916.9 634.8 1916.7 635.3 1916.7 635.7 1916.5 636 1916.8 636.2 1917 636.3 1917.1 636.5 1917 636.7 1917.3 637.1 1917.1 637.1 1916.9 637.6 1916.7 637.8 1916.4 637.7 1916.2 637.4 1916.1 637.2 1915.5 637.1 1915.2 636.6 1915.2 636.4 1915.1 636.1 1915.4 636.1 1915.7 635.9 1916.1 635.6 1916.2 635.3 1915.8 635.1 1915.4 635.2 1915.6 634.8 1915.9 634.7 1916.1 634.8 1916.5 634.5 1916.9 634.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1913.5 633.2 1913.2 633.8 1913.1 634.1 1913.4 634.1 1912.9 634.6 1912.7 634.8 1912.6 634.6 1912.9 634.2 1913.1 633.7 1913.5 633.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1913.5 633.2 1913.3 632.8 1913.7 632.8 1913.8 633.2 1913.5 633.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1899.6 630.8 1899.8 630.9 1900.3 631.8 1900.6 632.1 1900.9 632 1901.1 631.7 1902 632.2 1902.3 632.7 1903 633.3 1903.3 633.7 1903.4 634 1903.8 634.4 1903.9 634.6 1904.1 634.6 1904.4 634.9 1905.3 635.1 1905.4 635.4 1905.4 635.8 1905.7 636.2 1906.1 636.3 1905.8 636.8 1905.9 637 1906.3 637.5 1906.4 637.5 1906.8 638 1906.7 638.4 1907.4 638.6 1907.8 639.1 1908.1 639.1 1908.4 639.3 1908.9 639.7 1908.8 640 1909.1 640 1909.5 640.5 1910.1 640.9 1910.1 641.1 1910.4 641.2 1910.7 641.5 1910.7 641.7 1911 642.3 1911.4 642.7 1911.5 642.6 1911.9 643.2 1912.4 643.3 1912.7 643.6 1912.7 644 1912.8 644.4 1912.9 644.5 1912.7 645.1 1912 645.5 1911.9 645.2 1911.6 645.3 1911.3 645.6 1910.7 644.8 1910.3 644.8 1910.2 644.6 1910 644.6 1909.8 644.9 1908.9 644 1908.7 644 1908.3 643.5 1908.4 642.7 1908.1 642.7 1907.7 642.7 1907.4 642.5 1907.3 642.3 1907.1 642.2 1906.8 642.2 1906.8 641.9 1906.6 641.4 1906.2 641.5 1905.4 641 1905.3 640.8 1905.3 640.5 1905 640.7 1904.4 640.4 1904.3 640 1903.9 639.7 1903.7 639.2 1903.2 639.1 1903.4 638.9 1903.1 638.6 1902.8 638.5 1902.5 637.8 1902.5 637.4 1902.3 637.1 1902 637.1 1901.8 636.5 1901.9 636.3 1901.2 635.9 1900.9 635.7 1900.5 635.1 1900.8 634.9 1900.6 634.7 1900.4 634.4 1900.4 633.9 1899.9 633.6 1899.9 633 1899.7 632.7 1900 632.7 1900.1 632.4 1900 632.2 1899.4 632.2 1899.2 631.9 1899.7 631.2 1899.4 630.9 1899.6 630.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1900.7 631.1 1900.4 631 1900.5 630.6 1900.7 631.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="New Caledonia"
        d="M 1898.4 628.7 1898.2 628.9 1898.1 628.5 1898.3 628.3 1898.4 628.7 Z"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 195.3 679.3 195.2 679.2 195 678.9 195.1 678.7 195.4 678.9 195.3 679.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 205.6 641.2 205.5 641.3 205.2 641.1 205.4 640.9 205.6 641.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 199.4 616.5 199.2 616.4 199.4 615.8 199.9 615.4 200.2 615.4 200.2 615.6 200 616 199.4 616.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 151.7 615.5 152.4 615.7 152.7 616.1 152.7 616.4 152.5 616.5 152 616.4 151.6 615.8 151.5 615.6 150.9 615.8 150.7 615.8 150.1 615.7 149.9 615.3 149.6 614.8 149.6 614.5 149.7 614.3 150.2 614.2 150.7 614.2 151.2 614.4 151.4 614.8 151.5 615.4 151.7 615.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 148.7 614 148.5 614.6 148 614.4 148.1 614.1 148.6 613.9 148.7 614 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 141.1 609.7 140.9 609.8 140.7 609.5 141 609.4 141.1 609.7 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 139 610.1 138.7 610.3 138.4 610.3 138.2 609.5 138.4 609.3 139.1 610.1 139 610.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 138 608.3 138.2 608.4 138.2 608.9 137.8 608.7 137.7 608.4 138 608.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 166.3 605.4 166 605.5 166.1 605.2 166.3 605.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 204.3 569.5 204 569.5 204 569.1 203.8 568.8 204.2 568.9 204.3 569.3 204.3 569.5 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 201.2 566 201 566 201 565.6 201.2 565.3 201.5 565.5 201.3 565.7 201.2 566 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 202.4 564.4 202.4 564.7 202 564.8 201.4 564.8 201.4 565.1 201 565 200.8 564.8 200.7 564.5 201.4 564.1 201.7 564.1 201.9 564.3 202.4 564.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 195.5 561.8 195.5 562.2 195.5 562.4 195.2 562.4 194.9 562 195.2 561.7 195.5 561.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 197.9 558.8 198.2 558.9 198.3 559 197.7 559.2 197.6 558.9 197.9 558.8 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="French Polynesia"
        d="M 194.2 558.2 195.1 558.3 195.4 558.6 195.4 558.8 195 559.1 194.2 559.1 194.1 558.6 194 558.2 194.2 558.2 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Northern Mariana Islands"
        d="M 1802.5 411.1 1802.4 411.2 1802.2 411.1 1802.1 410.9 1802.6 410.7 1802.8 410.9 1802.5 411.1 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Northern Mariana Islands"
        d="M 1804 406 1803.8 406 1803.5 405.4 1803.6 405.1 1803.9 405.1 1803.9 405.4 1804.1 405.6 1804 406 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Northern Mariana Islands"
        d="M 1804.5 404.4 1804.3 404.6 1804.4 404.9 1804 404.9 1804 404.2 1804.1 404 1804.5 403.8 1804.4 404.3 1804.5 404.4 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Northern Mariana Islands"
        d="M 1802.6 396.9 1802.3 396.9 1802.2 396.7 1802.6 396.7 1802.6 396.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Northern Mariana Islands"
        d="M 1800.7 385.9 1800.6 385.7 1800.6 385.2 1800.9 385.1 1801.1 385.4 1800.7 385.9 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Northern Mariana Islands"
        d="M 1799.5 381.6 1799.1 381.5 1799.1 381.2 1799.3 381.1 1799.5 381.3 1799.5 381.6 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Samoa"
        d="M 21.9 591.3 22.2 591.4 22.5 591.5 22.8 591.7 22.7 592 21.7 592 21.4 591.9 21.1 592 20.9 591.9 20.5 591.7 20.2 591.8 19.9 591.6 19.7 591.4 19.1 591.1 19.2 590.7 19.6 590.5 20 590.5 20.5 590.5 21.4 590.9 21.9 591 21.9 591.3 Z"></Path>
      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        class="Samoa"
        d="M 17.4 588.5 18 589.1 18.2 589.8 18.1 590.1 18.2 590.4 17.9 590.4 17.6 590.2 17.3 590.4 16.4 590.5 16.1 590.2 15.9 589.8 15.7 589.7 15.4 589.4 14.9 589 14.7 588.8 14.7 588.6 15.1 588.7 15.4 588.6 16 588.4 16.4 588.4 16.9 588.3 17.2 588.3 17.4 588.5 Z"></Path>

      <Path
        stroke={'transparent'}
        fill={selected === 'Oceania' ? selectedColor : color}
        strokeWidth={'1'}
        d="M1800.8 415.5l-0.1 0.4 0 0.6-0.1 0.3-0.3 0-0.2-0.3-0.1-0.5 0-0.5 0.6-0.5 0.1-0.2 0.1-0.5 0.2-0.1 0.1 0.2 0.4 0.1-0.2 0.5-0.5 0.5z"
        id="GU"
        name="Guam"></Path>
 
    </G>
  );
};

export default Oceania;
