!function(){var e;e=jQuery,Craft.EntryTypeSwitcher=Garnish.Base.extend({$typeSelect:null,$spinner:null,init:function(){this.$typeSelect=e("#entryType"),this.$spinner=e('<div class="spinner hidden"/>').insertAfter(this.$typeSelect.parent()),this.addListener(this.$typeSelect,"change","onTypeChange")},onTypeChange:function(t){var n=this;this.$spinner.removeClass("hidden"),Craft.postActionRequest("entries/switch-entry-type",Craft.cp.$primaryForm.serialize(),(function(t,r){if(n.$spinner.addClass("hidden"),"success"===r){n.trigger("beforeTypeChange");var i=e("#tabs");if(t.tabsHtml)if(i.length)i.replaceWith(t.tabsHtml);else{var a=e("<header/>",{id:"content-header",class:"pane-header"}).prependTo(e("#content"));e(t.tabsHtml).appendTo(a).attr("id","tabs")}else e("#content-header").remove();Craft.cp.initTabs(),e("#fields").html(t.fieldsHtml),Craft.initUiElements(e("#fields")),Craft.appendHeadHtml(t.headHtml),Craft.appendFootHtml(t.bodyHtml),"undefined"!=typeof slugGenerator&&slugGenerator.setNewSource("#title"),n.trigger("typeChange"),window.draftEditor.checkForm()}}))}})}();
//# sourceMappingURL=EntryTypeSwitcher.js.map