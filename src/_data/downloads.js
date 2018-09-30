import { faApple, faWindows, faLinux, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'

const release = 'v0.17.2';

export const buttons = {
  "osx": {
    icon: faApple,
    desc: "MacOS",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/Garlicoin-x86_64-apple-darwin11.tar.gz`
  },
  "windows64": {
    icon: faWindows,
    desc: "Windows (64-bit)",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/Garlicoin-x86_64-w64-mingw32.tar.gz`
  },
  "windows": {
    icon: faWindows,
    desc: "Windows (32-bit)",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/Garlicoin-i686-w64-mingw32.tar.gz`
  },
  "linux": {
    icon: faLinux,
    desc: "Linux",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/Garlicoin-x86_64-unknown-linux-gnu.tar.gz`
  },
  "RPI": {
    icon: faMicrochip,
    rotate: 90,
    desc: "Raspberry Pi",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/Garlicoin-arm-linux-gnueabihf.tar.gz`
  },
  "github": {
    icon: faGithub,
    desc: "Source Code",
    link: `https://github.com/GarlicoinOrg/Garlicoin/archive/${release}.tar.gz`
  }
};
