"use client";

import { css } from "@/styled-system/css";
import { SystemStyleObject } from "@/styled-system/types";

import { useState, useEffect, memo } from "react";

import { Action } from "../types/types";

import { AssistantMessageViewer } from "@/src/components/AssistantMessageViewer";
import { UserMessageViewer } from "@/src/components/UserMessageViewer";
import { Button } from "@/src/components/Button/Button";

import { useVoiceConversation } from "@/src/hooks/useVoiceConversation";

import { useCartState } from "../stores/useCartState";

import { usePageController } from "@/src/hooks/usePageController";
import { useProductsState } from "../stores/useProductsState";

const ConversationViewerComponent = ({ css: cssProps }: { css?: SystemStyleObject }) => {
  const [isConversationEnabled, setIsConversationEnabled] = useState(false);

  const { isEnabled, setEnabled } = useVoiceConversation({
    onActionRequested: (action: Action) => {
      if (action.type === "show-products") {
        setProductIds(action.productIds);
        showProducts();
      } else if (action.type === "add-cart") {
        addCartItem(action.productId, action.quantity);
      } else if (action.type === "update-cart") {
        updateCartItem(action.productId, action.quantity);
      } else if (action.type === "remove-cart") {
        removeCartItem(action.productId);
      } else if (action.type === "clear-cart") {
        clearCart();
      } else if (action.type === "move-page") {
        if (action.page.type === "conversation") {
          showConversation();
        } else if (action.page.type === "product-list") {
          showProducts();
        } else if (action.page.type === "product-details") {
          showProductDetails(action.page.productId);
        } else if (action.page.type === "cart") {
          showCart();
        }
      }
    },
  });

  const { setProductIds } = useProductsState();

  const { addCartItem, updateCartItem, removeCartItem, clearCart } = useCartState();

  const { currentPageInfo, showConversation, showProducts, showProductDetails, showCart } = usePageController();

  useEffect(() => {
    if (currentPageInfo.type === "home") {
      setIsConversationEnabled(false);
      setEnabled(false);
    } else {
      setIsConversationEnabled(true);
    }
  }, [currentPageInfo.type, setEnabled]);

  if (!isConversationEnabled) {
    return null;
  }

  return (
    <div
      className={css(
        {
          display: "flex",
          flexDirection: "column",
          padding: "1em 2em",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
          backgroundColor: "#e0e0e0",
        },
        cssProps
      )}
    >
      <AssistantMessageViewer css={{ fontSize: "1.2em" }} />
      <UserMessageViewer css={{ fontSize: "0.8em" }} />
      <div
        className={css({ position: "absolute", bottom: "1em", right: "1em", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5em" })}
      >
        <div className={css({ fontSize: "0.8em", color: "#ffffff" })}>Voice Mode</div>
        <Button className={css({ width: "1em", height: "2em" })} disabled={isEnabled} onClick={() => setEnabled(true)}>
          Enable
        </Button>
        <Button className={css({ width: "1em", height: "2em" })} disabled={!isEnabled} onClick={() => setEnabled(false)}>
          Disable
        </Button>
      </div>
    </div>
  );
};

export const ConversationViewer = memo(ConversationViewerComponent);
