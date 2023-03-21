  /** id, name の表示用共通定義 */
export interface IDisplayMaster {
  id: number;
  name: string;
}

export interface ISelectOption extends IDisplayMaster {}
export interface ITagListOption extends IDisplayMaster {}