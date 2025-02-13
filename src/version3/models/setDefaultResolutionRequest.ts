/** The new default issue resolution. */
export interface SetDefaultResolutionRequest {
  /**
   * The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the
   * default resolution setting.
   */
  id: string;
}
