import { faApple, faWindows, faLinux, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'

const release = 'v0.17.2';

export const buttons = {
  "osx": {
    icon: faApple,
    desc: "MacOS",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-osx64.tar.gz`
  },
  "windows64": {
    icon: faWindows,
    desc: "Windows (64-bit)",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-win64.zip`
  },
  "windows": {
    icon: faWindows,
    desc: "Windows (32-bit)",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-win32.zip`
  },
  "linux": {
    icon: faLinux,
    desc: "Linux",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-x86_64-linux-gnu.tar.gz`
  },
  "RPI": {
    icon: faMicrochip,
    rotate: 90,
    desc: "Raspberry Pi",
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-arm-linux-gnueabihf.tar.gz`
  },
  "github": {
    icon: faGithub,
    desc: "Source Code",
    link: `https://github.com/GarlicoinOrg/Garlicoin/archive/${release}.tar.gz`
  }
};
