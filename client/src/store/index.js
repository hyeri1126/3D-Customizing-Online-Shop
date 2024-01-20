// valtio -> React 애플리케이션에서 상태 관리를 위한 상태 관리 라이브러리 중 하나,
// proxy는 valtio에서 주로 사용되는 함수 중 하나로, valtio를 사용하여 상태를 선언하고
// 추적할 때 필요한 핵심 기능 중 하나임
import { Tube } from '@react-three/drei';
import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#FCAEAE',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './bear_logo.png',
    fullDecal: './threejs.png',
});

export default state;

// FFB7B7