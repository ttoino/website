{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    playwright = {
      url = "github:pietdevries94/playwright-web-flake/1.57.0";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      nixpkgs,
      playwright,
      self,
      ...
    }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ self.overlays.default ];
      };
    in
    {
      overlays.default = final: prev: {
        inherit (playwright.packages.${system}) playwright-driver;
      };

      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs
          corepack
        ];

        shellHook = ''
          export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true
          export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true
          export PLAYWRIGHT_HOST_PLATFORM_OVERRIDE="ubuntu-24.04"
          export PLAYWRIGHT_BROWSERS_PATH=${pkgs.playwright-driver.browsers}
        '';
      };
    };
}
