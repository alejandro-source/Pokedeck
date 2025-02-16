'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">poke-deck documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AplicacionModule.html" data-type="entity-link" >AplicacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AplicacionModule-732359f50d851466911e7bb9fd3e32cac067d041c6c13f18b1df1e473c4cebe99d5c41a84e05e95249c85681e45139b10be99875e5bb2d46a2e579a3d685d048"' : 'data-bs-target="#xs-components-links-module-AplicacionModule-732359f50d851466911e7bb9fd3e32cac067d041c6c13f18b1df1e473c4cebe99d5c41a84e05e95249c85681e45139b10be99875e5bb2d46a2e579a3d685d048"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AplicacionModule-732359f50d851466911e7bb9fd3e32cac067d041c6c13f18b1df1e473c4cebe99d5c41a84e05e95249c85681e45139b10be99875e5bb2d46a2e579a3d685d048"' :
                                            'id="xs-components-links-module-AplicacionModule-732359f50d851466911e7bb9fd3e32cac067d041c6c13f18b1df1e473c4cebe99d5c41a84e05e95249c85681e45139b10be99875e5bb2d46a2e579a3d685d048"' }>
                                            <li class="link">
                                                <a href="components/CatalogoDePokemonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogoDePokemonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-db042d444070c1ebce515d2d9e1811c88257461dbbb3b02936abfbc59853afedc1f9c27929df21bf853dd6b2d600c034a6241b93d64fae4df46d394a610d9c4a"' : 'data-bs-target="#xs-components-links-module-AppModule-db042d444070c1ebce515d2d9e1811c88257461dbbb3b02936abfbc59853afedc1f9c27929df21bf853dd6b2d600c034a6241b93d64fae4df46d394a610d9c4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-db042d444070c1ebce515d2d9e1811c88257461dbbb3b02936abfbc59853afedc1f9c27929df21bf853dd6b2d600c034a6241b93d64fae4df46d394a610d9c4a"' :
                                            'id="xs-components-links-module-AppModule-db042d444070c1ebce515d2d9e1811c88257461dbbb3b02936abfbc59853afedc1f9c27929df21bf853dd6b2d600c034a6241b93d64fae4df46d394a610d9c4a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-1231d896dc4d8cdedc3571c1928324035a2ddb318f138ba42c13a62b57e41e3ec05f8db71256277a12323e1136c10ebaff1702b238aba55442d13d90e4b748c8"' : 'data-bs-target="#xs-components-links-module-SharedModule-1231d896dc4d8cdedc3571c1928324035a2ddb318f138ba42c13a62b57e41e3ec05f8db71256277a12323e1136c10ebaff1702b238aba55442d13d90e4b748c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-1231d896dc4d8cdedc3571c1928324035a2ddb318f138ba42c13a62b57e41e3ec05f8db71256277a12323e1136c10ebaff1702b238aba55442d13d90e4b748c8"' :
                                            'id="xs-components-links-module-SharedModule-1231d896dc4d8cdedc3571c1928324035a2ddb318f138ba42c13a62b57e41e3ec05f8db71256277a12323e1136c10ebaff1702b238aba55442d13d90e4b748c8"' }>
                                            <li class="link">
                                                <a href="components/AppFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrarseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrarseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Convert.html" data-type="entity-link" >Convert</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceService.html" data-type="entity-link" >ServiceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PokeAPI.html" data-type="entity-link" >PokeAPI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonDetails.html" data-type="entity-link" >PokemonDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});